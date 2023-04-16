import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext'

const UpdateNote = () => {
  const { id } = useParams();
  const { getNote, updateNote } = useContext(NotesContext);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getNote(id)
      .then((note) => setText(note.text))
      .catch((error) => console.error(error));
  // eslint-disable-next-line
  }, [id]);
  

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateNote(id, text)
    navigate('/')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Update your note {id}</h1>
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

export default UpdateNote;