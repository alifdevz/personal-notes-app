import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: +new Date(),
            title: '',
            body: '',
            createdAt: +new Date(),
            archived: false
        }
    }

    onTitleChangeEventHandler(event) {

    }

    onBodyChangeEventHandler(event) {

    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea placeholder="Tulislah catatanmu di sini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;