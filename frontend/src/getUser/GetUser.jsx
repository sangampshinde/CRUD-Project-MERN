import React, { useEffect, useState } from 'react';
import './GetUser.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';



const User = () => {

      const [users,setUsers] = useState([]);
    

      useEffect(()=>{
        const fetchData = async (req,res) => {
            try {
                const response = await axios.get("https://crud-project-mern.onrender.com/api/users");
                setUsers(response.data);   
            } catch (error) {
                console.log('Error fetching data', error);
            }
        }
        fetchData();
      },[]);

      const deleteUser = async (userId)=>{
        try {
            const response = await axios.delete(`https://crud-project-mern.onrender.com/api/delete/user/${userId}`);
            setUsers(users.filter(user=>user._id!== userId));
            toast.success(response.data.message,{position: "top-right"});
        } catch (error) {
            console.log('Error deleting user', error);
            toast.error('Error deleting user');
            
        }
      }


  return (
    <>
    
    <div className='user-table'>
        <Link to="/add" type="button" className="btn btn-primary">Add User <i className="fa-solid fa-user-plus"></i></Link>
        {users.length === 0? (<div className='noData text-center'>
            <h3>No Data to Display</h3>
            <p>Please Add New Users</p>
        </div>):(
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>S.No.</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=>{
                    return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td><Link to={`/update/${user._id}`} type="button" className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>  <button type="button" onClick={() => deleteUser(user._id)} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button></td>
                            </tr>
                          )
                 })}
            </tbody>
        </table>)}
    </div>
            
    </>
  )
}
export default User