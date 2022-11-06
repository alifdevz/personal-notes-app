import React from "react";
import EmptyNotesMessage from "./EmptyNotesMessage";
import GridNoteItems from "./GridNoteItems";

function NoteList({ notes, onDelete, onArchive }) {
    return (
        <div className="note-list">
            <h2>Catatan Aktif</h2>
            {notes.length
            ? <GridNoteItems notes={notes} onDelete={onDelete} onArchive={onArchive} />
            : <EmptyNotesMessage />}
        </div>
    )
}

export default NoteList;