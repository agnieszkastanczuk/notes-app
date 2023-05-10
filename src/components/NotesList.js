import NoteShow from './NoteShow';

function NoteList({ notes, onDelete, onEdit }) {
    const renderedNotes = notes.map((note) => {
        return <NoteShow onEdit={onEdit} onDelete={onDelete} key={note.id} note={note} />;
    });

    return (
        <section className='note-list'>
            {notes.length === 0 ? <p>No notes.</p> : renderedNotes}
        </section>
    );
}

export default NoteList;
