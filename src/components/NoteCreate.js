import { useState } from "react";
import { MdDone } from "react-icons/md";

function NoteCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return (
        <section className="note-create">
            <h2>add a note</h2>
            <form onSubmit={handleSubmit}>
                <textarea value={title} onChange={handleChange} />
                <button>
                    <MdDone />
                </button>
            </form>
        </section>
    );
}

export default NoteCreate;
