import React, { useEffect, useState } from 'react';
import './GetUser.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



const User = () => {

      const [users,setUsers] = useState([]);

      useEffect(()=>{
        const fetchData = async (req,res) => {
            try {
                const response = await axios.get("http://localhost:8000/api/users");
                setUsers(response.data);   
            } catch (error) {
                console.log('Error fetching data', error);
            }

        }
        fetchData();

      },[]);


  return (
    <>
    
    <div className='user-table'>
        <Link to="/add" type="button" className="btn btn-primary">Add User <i className="fa-solid fa-user-plus"></i></Link>
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
                            <tr>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td><button type="button" className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></button>  <button type="button" className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button></td>
                            </tr>
                          )
                })}
                
            </tbody>
            

        </table>

    </div>
    
    
    
    
    
    </>
  )
}

export default User