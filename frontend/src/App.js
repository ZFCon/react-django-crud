import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UpdateNote from './components/UpdateNote';
import { NotesProvider } from './context/NotesContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <NotesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note/:id" element={<UpdateNote />} />
          </Routes>
        </NotesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
