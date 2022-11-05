import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    // console.log('notelist', notes)
    return (
        <div className="note-list">
            <div className="grid-container">
                {notes.map(note => <NoteItem key={note.id} {...note} />)}
            </div>
        </div>
    )
}

export default NoteList;