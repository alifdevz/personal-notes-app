import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    // console.log('notelist', notes)
    return (
        <div className="note-list">
            <h2>Catatan Aktif</h2>
            <div className="grid-container">
                {notes.map(note => <NoteItem key={note.id} {...note} />)}
            </div>
        </div>
    )
}

export default NoteList;