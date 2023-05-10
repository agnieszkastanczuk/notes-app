import { useState, useEffect } from "react";
import NoteCreate from "./components/NoteCreate";
import NoteList from "./components/NotesList";
import 'animate.css';

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const storedNotes = localStorage.getItem("notes");
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);


    const editNoteById = (id, newTitle) => {
        const updatedNotes = notes.map((note) => {
            if (note.id === id) {
                return { ...note, title: newTitle };
            }
            return note;
        });
        setNotes(updatedNotes);
    }

    const deleteNoteById = (id) => {
        const updatedNotes = notes.filter((note) => {
            return note.id !== id;
        });

        setNotes(updatedNotes);
    };

    const createNote = (title) => {
        const newNote = {
            id: Math.round(Math.random() * 9999),
            title,
            createdAt: new Date().toLocaleString()
        };
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
    };

    return (
        <div>
            <h1 className="animate__animated animate__headShake">my NOTES</h1>
            <NoteCreate onCreate={createNote} />
            <NoteList onEdit={editNoteById} notes={notes} onDelete={deleteNoteById} />
        </div>
    );
}

export default App;
