import React from "react";
import NoteItemArchiveButton from "./NoteItemArchiveButton";
import NoteItemDeleteButton from "./NoteItemDeleteButton";

function NoteItemAction({ id, onDelete, onArchive }) {
    return (
        <div className="note-item__action">
            <NoteItemDeleteButton id={id} onDelete={onDelete} />
            <NoteItemArchiveButton id={id} onArchive={onArchive} />
        </div>
    )
}

export default NoteItemAction;