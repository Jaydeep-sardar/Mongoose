import express from "express";
import connectDb from "./db/connectDb.js";
const app =express();
const port =process.env.port||8000;
const DATABASE_URL= process.env.DATABASE_URL||"mongodb://127.0.0.1:27017/MOVIES";

connectDb(DATABASE_URL)

app.listen(port,() =>console.log(`server listening on port ${port}`));