import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

// db connection
try {
    mongoose.connect(DB);
    console.log('DB Connected Sucessfully');
} catch (error) {
    console.error('DB Connection Error:', error.message);
    process.exit(1); 
}


app.listen(PORT,() => {
        console.log(`Server started at PORT: ${PORT}`);

})










