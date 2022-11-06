import React from "react";
import EmptyNotesMessage from "./EmptyNotesMessage";
import GridNoteItems from "./GridNoteItems";

function ArchivedNoteList({ notes, onDelete, onArchive }) {
    return (
        <div className="note-list">
            <h2>Arsip</h2>
            {notes.find(note => note.archived)
            ? <GridNoteItems notes={notes} onDelete={onDelete} onArchive={onArchive} />
            : <EmptyNotesMessage />}
        </div>
    )
}

export default ArchivedNoteList;