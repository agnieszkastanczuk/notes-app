import { MdModeEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import NoteEdit from "./NoteEdit";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import 'animate.css';

function NoteShow({ note, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleDeleteClick = () => {
        onDelete(note.id);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle)
    };

    let content = <div>
        <ReactMarkdown>
            {note.title}
        </ReactMarkdown></div>;
    if (showEdit) {
        content = <NoteEdit onSubmit={handleSubmit} note={note} />
    }

    return <div className="note-show animate__animated animate__headShake">
        <div className="btns">
            <button onClick={handleEditClick}>
                <MdModeEdit />
            </button>
            <button onClick={handleDeleteClick}>
                <MdClose />
            </button>
        </div>
        <div className="date">
            <p>Creation date: {note.createdAt}</p>
        </div>
        {content}
    </div>
}

export default NoteShow;
