import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: +new Date(),
            title: '',
            body: '',
            createdAt: +new Date(),
            archived: false,
            availableTitleChars: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onCharLimitChangeEventHandler = this.onCharLimitChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onCharLimitChangeEventHandler(event) {
        let chars = event.target.value;
        let difference = 50 - chars.length;
        if (difference >= 0) {
            this.setState(
                {
                    availableTitleChars: difference
                } 
            );
        }
    }

    onTitleChangeEventHandler(event) {
        let charsLength = event.target.value.length;
        if (charsLength <= 50) {
            // console.log(this.state.availableTitleChars, event.target.value, charsLength)
            this.setState({
                title: event.target.value
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState({
            body:event.target.value
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className="note-form">
                <h2>Buat Catatan</h2>
                <br />
                <span className="characters-left">Sisa karakter: {this.state.availableTitleChars}</span>
                <form onSubmit={this.onSubmitEventHandler} >
                    <input 
                        placeholder="Ini adalah judul..."
                        value={this.state.title}
                        onChange={(event) =>{
                            this.onTitleChangeEventHandler(event);
                            this.onCharLimitChangeEventHandler(event);
                        }}
                    />
                    <textarea 
                        placeholder="Tulislah catatanmu di sini..." 
                        value={this.state.body} 
                        onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;