import { Link } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';
import { useContext } from 'react';

const NoteList = () => {
    const { notes, deleteNote } = useContext(NotesContext);

    return (
        <div>
            <h1>Notes</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Note Text</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note) => (
                        <tr key={note.id}>
                            <td>{note.id}</td>
                            <td>{note.text}</td>
                            <td>
                                <Link to={`/note/${note.id}`}>
                                    <button className="btn btn-primary mx-1">Update</button>
                                </Link>
                                <button
                                    className="btn btn-danger mx-1"
                                    onClick={() => deleteNote(note.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NoteList;
