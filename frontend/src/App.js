import './App.css';
import Note from './components/note';
import NoteList from './components/noteList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch the list of notes from the Django backend
    axios.get('http://127.0.0.1:8000/api/notes/')
      .then(response => {
        console.log(response.data);
        setNotes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div className='container'>
          <NoteList notes={notes} setNotes={setNotes}></NoteList>
          <Note notes={notes} setNotes={setNotes}></Note>
        </div>
      </body>
    </div>
  );
}

export default App;
