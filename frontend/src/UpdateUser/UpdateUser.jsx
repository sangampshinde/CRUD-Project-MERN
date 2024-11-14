import React, { useEffect, useState } from 'react';
import "./UpdateUser.css";
import { Link, useNavigate,useParams } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";


const UpdateUser = () => {
    const User= {
        name: "",
        email: "",
        address: ""
    };

    const [user, setUser] = useState(User);
    const navigate = useNavigate();
    const { id } = useParams();


    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    //NOTE:You canot give async to useeffect function
    useEffect(()=>{

        const fetchUser = async () => {
            try {
                 const response = await axios.get(`http://localhost:8000/api/user/${id}`);
                 setUser(response.data); 
            } catch (error) {
                console.log(error);
                toast.error("Failed to fetch user");
            }
        }
        fetchUser();
    },[id])

    const submitForm = async (e) => {
        e.preventDefault();
        try {
             const response = await axios.put(`http://localhost:8000/api/update/user/${id}`, user);
             toast.success(response.data.message,{position :"top-right"});
             navigate("/");


        } catch (error) {
            console.error("Error creating user:", error);
            toast.error("Failed to update user",{position :"top-right"});
        }
    };

    return (
        <div className='addUser'>
            <Link to="/" type="button" className="btn btn-secondary">
                <i className="fa-solid fa-backward"></i> Back
            </Link>
            <h3 className='mt-3'>Update User</h3>
            <form className='AddNewUserForm' onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label mt-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={inputHandler}
                        value={user.name}
                        autoComplete='off'
                        className="form-control"
                        id="name"
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={inputHandler}
                        value={user.email}
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea
                        name="address"
                        onChange={inputHandler}
                        value={user.address}
                        className="form-control mb-3"
                        id="address"
                        rows="3"
                        placeholder="Enter Your Address"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
};

export default UpdateUser;
