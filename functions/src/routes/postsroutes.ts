import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { getClient } from '../db';
import { LogPost } from "../model/Post";

// creates an Express application - allows us to create and and use APIs
const app = express();

// Enable CORS so that this can be used from web-apps on other domains.
app.use(cors());

// Allow JSON request bodies for PUT and POST
app.use(express.json());


app.get("/", async (req, res) => {
    try {
      const client = await getClient();
      const results = await client.db().collection<LogPost>('posts').find().toArray();
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

  app.post( "/", async ( req, res ) => {
    const post = req.body as LogPost;
    try {
        const client = await getClient();
        const result = await client.db().collection<LogPost>( 'posts' ).insertOne( post );
        post._id = result.insertedId;
        res.status( 201 ).json( post );
    } catch ( err ) {
        console.error( "FAIL", err );
        res.status( 500 ).json( { message: "Internal Server Error" } );
    }
} );

export default functions.https.onRequest(app);
