import React from "react";
import NoteItemArchiveButton from "./NoteItemArchiveButton";
import NoteItemDeleteButton from "./NoteItemDeleteButton";

function NoteItemAction({ id, onDelete }) {
    return (
        <div className="note-item__action">
            <NoteItemDeleteButton id={id} onDelete={onDelete} />
            <NoteItemArchiveButton />
        </div>
    )
}

export default NoteItemAction;