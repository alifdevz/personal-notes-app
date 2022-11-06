import React from "react";
import NoteItem from "./NoteItem";

function GridNoteItems({ notes, onDelete }) {
    return (
        <div className="grid-container">
            {notes.map(note => <NoteItem key={note.id} note={note} onDelete={onDelete} />)}
        </div>
    )
}

export default GridNoteItems;