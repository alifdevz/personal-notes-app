import React from "react";

class NoteItemAction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="note-item__action">
                <button className="note-item__delete-button">Hapus</button>
                <button className="note-item__archive-button">Arsipkan</button>
            </div>
        )
    }
}

export default NoteItemAction;