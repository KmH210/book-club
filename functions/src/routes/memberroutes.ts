import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { getClient } from '../db';
// import { Book } from "../model/Book";
import { MemberBook, ProgressUpdate } from "../model/Member";
import { ObjectId } from "mongodb";

// creates an Express application - allows us to create and and use APIs
const app = express();
// Enable CORS so that this can be used from web-apps on other domains.
app.use(cors());
// Allow JSON request bodies for PUT and POST
app.use(express.json());


//get all unfinished books for a given member
app.get("/:name", async (req, res) => {
    const name = req.params.name;
    try {
      const client = await getClient();
      const results = await client.db().collection<MemberBook>('members').find({memberName: name, isFinished:false}).toArray();
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

  //POST a new MemberBook (for when member starts a new book)
  app.post( "/", async ( req, res ) => {
    const newMemberBook = req.body as MemberBook;
    try {
        const client = await getClient();
        const result = await client.db().collection( 'members' ).insertOne( newMemberBook );
        newMemberBook._id = result.insertedId;
        res.status( 201 ).json( newMemberBook );
    } catch ( err ) {
        console.error( "FAIL", err );
        res.status( 500 ).json( { message: "Internal Server Error" } );
    }
} );


  //UPDATE MemberBook (for when member logs progress)  
  app.put( "/:id", async ( req, res ) => {
    const progressUpdate:ProgressUpdate = req.body as ProgressUpdate;
    const id:string = req.params.id as string;
    try {
        const client = await getClient();
        const result = await client.db().collection( 'members' ).updateOne( {_id: new ObjectId(id)}, {$set: progressUpdate} );
        res.json( result );
    } catch ( err ) {
        console.error( "FAIL", err );
        res.status( 500 ).json( { message: "Internal Server Error" } );
    }
} );

export default functions.https.onRequest(app);