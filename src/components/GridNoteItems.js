import React from "react";
import NoteItem from "./NoteItem";

function GridNoteItems({ notes, onDelete, onArchive }) {
    return (
        <div className="grid-container">
            {notes.map(note => <NoteItem 
                                    key={note.id} 
                                    note={note} 
                                    onDelete={onDelete} 
                                    onArchive={onArchive}
                                />)
            }
        </div>
    )
}

export default GridNoteItems;