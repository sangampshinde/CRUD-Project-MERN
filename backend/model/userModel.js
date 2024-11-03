//model are created to create table in DB

//STEP 1: import mongoose for it
import mongoose from "mongoose";


// STEP 2: define scema in an variable
const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
});


// STEP 3: export the model 
export default mongoose.model("Users",userSchema)
