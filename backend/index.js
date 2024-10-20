import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from "dotenv";


const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const DBURL = process.env.DB;

try {
    mongoose.connect(DBURL);
    console.log("Conncted to Database Sucessfully");
} catch (error) {
    console.log("Error connecting to Database:",error);
}




