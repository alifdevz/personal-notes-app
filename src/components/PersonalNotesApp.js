import React from "react";
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import { getInitialData } from '../utils/index';
import NoteList from "./NoteList";
import ArchivedNoteList from "./ArchivedNoteList";

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
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onArchiveHandler(id) {
        let archivedNote = this.state.notes.find(note => note.id === id);
        archivedNote.archived = archivedNote.archived ? false : true;
        let notArchivedNotes = this.state.notes.filter(note => note.id !== id);
        this.setState((prevState) => {
            return {
                notes: [...notArchivedNotes, archivedNote]
            }
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onSearchHandler(searchKeyword) {
        this.setState({ searchKeyword }); // sengaja dibuat sama dengan nama objectnya biar gampang ditimpa nilainya
        // console.log(searchKeyword)
        const searchResultNotes = this.state.notes.filter(note => note.title.toUpperCase().includes(searchKeyword.toUpperCase()));
        this.setState({ searchResultNotes });
        // console.log(this.state)
    }

    onAddNoteHandler({ id, title, body, createdAt, archived, availableTitleChars }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived
                    }
                ]
            }
        });
    }

    render() {
        console.log(this.state.notes)
        return (
            <>
                <NoteHeader notes={this.state.notes} onSearch={this.onSearchHandler} />
                <NoteInput addNote={this.onAddNoteHandler} />
                <NoteList 
                    notes={this.state.searchKeyword 
                        ? this.state.searchResultNotes 
                        : this.state.notes.filter(note => !note.archived)} 
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
                <ArchivedNoteList notes={this.state.notes.filter(note => note.archived)}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}/>
            </>
        )
    }
}

export default PersonalNotesApp;