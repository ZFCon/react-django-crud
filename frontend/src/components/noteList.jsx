import axios from 'axios';

const NoteList = ({ notes, setNotes }) => {
    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`).then(response => setNotes(notes.filter(note => note.id !== id))).catch(error => console.error(error))
        console.log(`Deleted ${id}`);
    };

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
                    {notes.map(note => (
                        <tr key={note.id}>
                            <td>{note.id}</td>
                            <td>{note.text}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(note.id)}
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
