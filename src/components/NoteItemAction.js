import React from "react";
import NoteItemArchiveButton from "./NoteItemArchiveButton";
import NoteItemDeleteButton from "./NoteItemDeleteButton";

function NoteItemAction({ id, onDelete, onArchive, archived }) {
    return (
        <div className="note-item__action">
            <NoteItemDeleteButton id={id} onDelete={onDelete} />
            <NoteItemArchiveButton id={id} onArchive={onArchive} archived={archived} />
        </div>
    )
}

export default NoteItemAction;