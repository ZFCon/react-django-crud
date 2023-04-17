import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import UpdateNote from './components/UpdateNote';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/note/:id" element={<UpdateNote />} />
      </Routes>
    </div>
  );
}

export default App;
