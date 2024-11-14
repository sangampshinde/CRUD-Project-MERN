import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './getUser/GetUser';
import AddUser from './addUser/AddUser';
import UpdateUser from './UpdateUser/UpdateUser';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:id" element={<UpdateUser/>} />
        

      </Routes>
    </Router>
  );
};

export default App;
