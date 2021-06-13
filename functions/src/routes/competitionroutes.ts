import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { getClient } from '../db';
import { Competition, MemberLog } from "../model/Competition";

// creates an Express application - allows us to create and and use APIs
const app = express();

// Enable CORS so that this can be used from web-apps on other domains.
app.use(cors());

// Allow JSON request bodies for PUT and POST
app.use(express.json());


app.get("/", async (req, res) => {
    try {
      const client = await getClient();
      const results = await client.db().collection<Competition>('competitions').findOne({isFinished:false});
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });


app.put("/", async (req, res) => {
    const newLogToCompetition:MemberLog = req.body
    try {
      const client = await getClient();
      const results = await client.db().collection<Competition>('competitions').updateOne({isFinished:false},{$push: {memberLogs: newLogToCompetition}});
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

app.get("/mostPages", async (req, res) => {
    
    try {
      const client = await getClient();
      const results = await client.db().collection('competitions').aggregate([{$match: {isFinished:false}}, 

        {$unwind: "$memberLogs"},
        {$group: {
          _id: "$memberLogs.memberName",
          totalPages: {$sum: "$memberLogs.pagesRead"}
        }},
        {$sort: {totalPages: -1}},
        {$limit: 1},
        {$project: {
          name: "$_id",
          totalPages: "$totalPages",
          _id: false
        }}

      ]).toArray();


      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });


app.get("/mostBooksFinished", async (req, res) => {
    
    try {
      const client = await getClient();
      const results = await client.db().collection('competitions').aggregate([{$match: {isFinished:false}}, 

        {$unwind: "$memberLogs"},
        {$group: {
          _id: "$memberLogs.memberName",
          totalBooks: {$sum: "$memberLogs.booksFinished"}
        }},
        {$sort: {totalBooks: -1}},
        {$limit: 1},
        {$project: {
          name: "$_id",
          totalBooksFinished: "$totalBooks",
          _id: false
        }}

      ]).toArray();


      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

app.get("/currentStats", async (req, res) => {
    
    try {
      const client = await getClient();
      const results = await client.db().collection('competitions').aggregate([{$match: {isFinished:false}}, 

        {$unwind: "$memberLogs"},
        {$group: {
          _id: "$memberLogs.memberName",
          totalBooks: {$sum: "$memberLogs.booksFinished"},
          totalPages: {$sum: "$memberLogs.pagesRead"}

        }},
        {$sort: {totalPages: -1}},
        {$project: {
          name: "$_id",
          totalPages: "$totalPages",
          totalBooksFinished: "$totalBooks",
          _id: false
        }}

      ]).toArray();


      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

 



//   app.put( "/:member", async ( req, res ) => {
//     const post = req.body as MemberLog;
//     const updateMember = req.params;
//     try {
//         const client = await getClient();
//         const result = await client.db().collection<Comp>( 'posts' ).insertOne( post );
//         post._id = result.insertedId;
//         res.status( 201 ).json( post );
//     } catch ( err ) {
//         console.error( "FAIL", err );
//         res.status( 500 ).json( { message: "Internal Server Error" } );
//     }
// } );

export default functions.https.onRequest(app);