import React from "react";

function NoteItem({ id, title, body, createdAt, archived, availableTitleChars }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h4 className="note-item__title">{title}</h4>
                <div className="note-item__date">{createdAt}</div>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                    <button className="note-item__delete-button">Hapus</button>
                    <button className="note-item__archive-button">Arsipkan</button>
            </div>
        </div>
    )
}

export default NoteItem;