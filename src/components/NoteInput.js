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
            <div className="note-form">
                <h2>Buat Catatan</h2>
                <br />
                <span className="characters-left">Sisa karakter: {50}</span>
                <form onSubmit={this.onSubmitEventHandler} >
                    <input placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea placeholder="Tulislah catatanmu di sini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;