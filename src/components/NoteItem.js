import React from "react";

function NoteItem({ id, title, body, createdAt, archived, availableTitleChars }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h4 className="note-item__title">Titleafasffdffsdfdsfsfdsfdfdfdfssdasdasdasd</h4>
                <div className="note-item__date">4 November 2022</div>
                <p className="note-item__body">Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.</p>
            </div>
            <div className="note-item__action">
                    <button className="note-item__delete-button">Hapus</button>
                    <button className="note-item__archive-button">Arsipkan</button>
            </div>
        </div>
    )
}

export default NoteItem;