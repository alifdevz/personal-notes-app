import React from "react";

function NoteItemArchiveButton({ id, onArchive, archived }) {
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>{!archived ? 'Arsipkan' : 'Pindahkan'}</button>
    )
}

export default NoteItemArchiveButton;