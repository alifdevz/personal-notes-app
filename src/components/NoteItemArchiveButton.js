import React from "react";

function NoteItemArchiveButton({ id, onArchive}) {
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>Arsipkan</button>
    )
}

export default NoteItemArchiveButton;