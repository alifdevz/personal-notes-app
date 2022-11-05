import React from "react";
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import { getInitialData, showFormattedDate } from '../utils/index';
import NoteList from "./NoteList";

class PersonalNotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchKeyword: '',
            searchResultNotes: ''
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(searchKeyword) {
        this.setState({ searchKeyword }); // sengaja dibuat sama dengan nama objectnya biar gampang ditimpa nilainya
        // console.log(searchKeyword)
        let searchResultNotes = this.state.notes.filter(note => note.title.toUpperCase().includes(searchKeyword.toUpperCase()));
        this.setState({ searchResultNotes });
        // console.log(this.state)
    }

    onAddNoteHandler({ id, title, body, createdAt, archived, availableTitleChars }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id,
                        title,
                        body,
                        createdAt: showFormattedDate(createdAt),
                        archived,
                        availableTitleChars
                    }
                ]
            }
        });
    }

    render() {
        return (
            <>
                <NoteHeader notes={this.state.notes} onSearch={this.onSearchHandler} />
                <NoteInput addNote={this.onAddNoteHandler} />
                <NoteList notes={this.state.searchKeyword ? this.state.searchResultNotes : this.state.notes} />
            </>
        )
    }
}

export default PersonalNotesApp;