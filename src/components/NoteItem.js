import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ note, onDelete }) {
    return (
        <div className="note-item">
            <NoteItemContent {...note} />
            <NoteItemAction id={note.id} onDelete={onDelete} />
        </div>
    )
}

export default NoteItem;