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

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
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
            <>
                <form onSubmit={this.onSubmitEventHandler} className="note-form">
                    <input placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea placeholder="Tulislah catatanmu di sini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat</button>
                </form>
            </>
        )
    }
}

export default NoteInput;