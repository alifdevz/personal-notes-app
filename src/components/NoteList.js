import React from "react";
import EmptyNotesMessage from "./EmptyNotesMessage";
import GridNoteItems from "./GridNoteItems";

function NoteList({ notes, onDelete }) {
    return (
        <div className="note-list">
            <h2>Catatan Aktif</h2>
            {notes
            ? <GridNoteItems notes={notes} onDelete={onDelete} />
            : <EmptyNotesMessage />}
        </div>
    )
}

export default NoteList;