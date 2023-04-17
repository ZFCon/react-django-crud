import { createContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const NotesContext = createContext([]);

const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Token ${token}`
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/notes/', { headers: headers })
            .then((response) => setNotes(response.data))
            .catch((error) => console.log(error));
    }, []);

    const addNote = (text) => {
        axios.post('http://127.0.0.1:8000/api/notes/', { "text": text }, { headers: headers }).then(response => setNotes([response.data, ...notes])).catch(error => console.error(error));
    };

    const deleteNote = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`, { headers: headers }).then(response => setNotes(notes.filter(note => note.id !== id))).catch(error => console.error(error))
    };

    const updateNote = (id, text) => {
        axios
            .put(`http://127.0.0.1:8000/api/notes/${id}/`, { text: text }, { headers: headers })
            .then((response) =>
                setNotes(
                    notes.map((note) =>
                        // eslint-disable-next-line
                        note.id == id ? { ...note, text: response.data.text } : note
                    )
                )
            )
            .catch((error) => console.error(error));
    };

    const getNote = (id) => {
        return axios.get(`http://127.0.0.1:8000/api/notes/${id}/`, { headers: headers })
            .then((response) => {
                // eslint-disable-next-line
                setNotes(notes.map((note) => note.id == id ? { ...note, text: response.data.text } : note))
                // eslint-disable-next-line
                return notes.find(note => note.id == id)
            })
            .catch((error) => console.error(error));
    };

    return (
        <NotesContext.Provider value={{ notes, getNote, addNote, deleteNote, updateNote }}>
            {children}
        </NotesContext.Provider>
    );
};

export { NotesProvider, NotesContext };
