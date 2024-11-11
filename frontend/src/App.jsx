import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './getUser/GetUser';
import AddUser from './addUser/AddUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/add" element={<AddUser />} />

      </Routes>
    </Router>
  );
};

export default App;
