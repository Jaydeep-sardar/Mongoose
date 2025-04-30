import express from "express";
//import {createDoc, findByIdAndDelete, updateByMany} from "./models/Movies.js";
//import {allDoc} from "./models/Movies.js";
//import { updateById } from "./models/Movies.js";
//import { updateByMany } from "./models/Movies.js";

import connectDb from "./db/connectDb.js";
const app =express();
const port =process.env.port||8000;
const DATABASE_URL= process.env.DATABASE_URL||"mongodb://127.0.0.1:27017/MOVIES";

connectDb(DATABASE_URL);
//allDoc();
//updateById(/*give the id required to change*/);
//updateByMany();
//findByIdAndDelete();

app.listen(port,() =>console.log(`server listening on port ${port}`));