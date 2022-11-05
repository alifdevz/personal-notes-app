import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ note }) {
    return (
        <div className="note-item">
            <NoteItemContent {...note} />
            <NoteItemAction />
        </div>
    )
}

export default NoteItem;