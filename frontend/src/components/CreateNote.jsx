import React, { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const CreateNote = () => {
  const [text, setText] = useState('');
  const { addNote } = useContext(NotesContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(text);
    setText('');
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

export default CreateNote;
