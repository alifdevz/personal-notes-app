import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ note, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemContent {...note} />
            <NoteItemAction id={note.id}
                            onDelete={onDelete} 
                            onArchive={onArchive} 
                            archived={note.archived} 
            />
        </div>
    )
}

export default NoteItem;