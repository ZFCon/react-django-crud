import React, { useState } from 'react';
import axios from 'axios';

const Note = ({ notes, setNotes }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/notes/', { "text": text })
      .then(response => {
        setNotes([response.data, ...notes]);
        setText('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create your note</h1>
        <textarea
          value={text}
          onChange={handleChange}
          className='form-control'
          placeholder="Type your note here..."
          rows="20"
          cols="80"
        />
        <br />
        <button type="submit" className='btn btn-primary px-5'>Save</button>
      </form>
    </div>
  );
};

export default Note;