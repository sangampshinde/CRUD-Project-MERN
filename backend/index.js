import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import route from './routes/userRoute.js';
import cors from 'cors';



const app = express();
app.use(bodyParser.json());
app.use(cors());
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

// middlewares
app.use('/api',route);



app.listen(PORT,() => {
        console.log(`Server started at PORT: ${PORT}`);

})










