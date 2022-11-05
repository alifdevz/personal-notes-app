import React from "react";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ note }) {
    return (
        <div className="note-item">
            <NoteItemContent {...note} />
            <div className="note-item__action">
                    <button className="note-item__delete-button">Hapus</button>
                    <button className="note-item__archive-button">Arsipkan</button>
            </div>
        </div>
    )
}

export default NoteItem;