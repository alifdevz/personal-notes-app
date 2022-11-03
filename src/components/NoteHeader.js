import React from "react";

function NoteHeader() {
    return (
        <div className="header">
            <div className="note-and-search">
                <h1>Note</h1>
                <div className="note-search-wrapper">
                    <input className="note-search" type="text" placeholder="Cari catatan..." />
                </div>
            </div>
            <hr className="header-line"/>
        </div>
    )
}

export default NoteHeader;