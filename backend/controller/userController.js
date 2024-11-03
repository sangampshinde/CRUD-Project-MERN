// Create controller to controll actions like create or update and delete actions

// STEP 1: import UserModel
import User from "../model/userModel.js";


// STEP 2: Define the controller

// create a new user
export const create = async(req,res)=>{

    try {
    //step 1: extract data from request body
    const newUser = new User(req.body);

    // step 2: extract email from User from Database.
    const { email } = newUser;

    // step 3: check if email already exists in database
    const userExist = await User.findOne({email});

    // step 4: if email already exists, return error
    if(userExist){
        return res.status(400).json({ message:'Email already exists'});
    }
    
    // step 5: if email does not exist, save the new user
    const saveData = await newUser.save();
    
    // step 6: send the saved user data
    res.status(200).send(saveData);
           
    } catch (error) {
        // handel the error here

        // status code 500 =>Internal server error
        res.status(500).json({errorMessage: error.message});
        
    }

};

// get all users from the database
export const getAllUsers = async (req,res) => {
    try {
        // get all users from the database
        const usersData = await User.find();

        // if there are no users
        if(!usersData|| usersData.length === 0 ){
            res.status(404).json({message:'no users found'});
        };

        // if present
        res.status(200).json(usersData);

    } catch (error) {
        res.status(500).json({errorMessage: error.message});
    }

};

// get User by ID
export const getUserById = async(req,res)=>{
    try {
        // store id in variable
        const id = req.params.id;
        
        // find user by id in database
        const userExist = await User.findById(id);

        // if user does not exist, return error
        if(!userExist){
            res.status(404).json({ message:'User does not exist'});
        }

        // if present
        res.status(200).json(userExist); 

    } catch (error) {
        res.status(500).json({errorMessage: error.message});
    }

};
// Update user by id
export const update = async(req,res)=>{
    try {
        // store id in variable
        const id = req.params.id;
        // find user by id in database
        const userExist = await User.findById(id);
        // if user does not exist, return error
        if(!userExist){
            res.status(404).json({message:'User not found'});
        }
        // update user data with new data from request body
        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true});
        // return user updated data
        res.status(200).json(updatedData);

    } catch (error) {
        res.status(500).json({errorMessage: error.message});
        
    }
}

// delete the user by id from database
export const deleteUser = async (req,res) => {
    try {
         // get the id from url
         const id = req.params.id;
         // find user if it exists
         const userExist = await User.findById(id);
        //  if user is not found return error
        if(!userExist){
            res.status(404).json({message: 'User not found'});
        }
        // if user is found then delete user
        await User.findByIdAndDelete(id);
        // return sucess messsage
        res.status(200).json({message:'user deleted sucessfully'});

        
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }

}


