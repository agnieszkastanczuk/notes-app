import { useState } from "react";
import { MdDone } from "react-icons/md";

function NoteEdit({ note, onSubmit }) {
    const [title, setTitle] = useState(note.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(note.id, title);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={title} onChange={handleChange} />
            <button>
                <MdDone />
            </button>
        </form>
    );
}

export default NoteEdit;
