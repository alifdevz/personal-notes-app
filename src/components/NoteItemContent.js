import React from "react";
import { showFormattedDate } from '../utils/index'


function NoteItemContent({ id, title, body, createdAt, archived, availableTitleChars }) {
    
    return (
        <div className="note-item__content">
            <h4 className="note-item__title">{title}</h4>
            <div className="note-item__date">{showFormattedDate(createdAt)}</div>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteItemContent;