import React from "react";
import NoteItem from "./NoteItem";

function GridNoteItems({ notes }) {
    return (
        <div className="grid-container">
            {notes.map(note => <NoteItem key={note.id} {...note} />)}
        </div>
    )
}

export default GridNoteItems;