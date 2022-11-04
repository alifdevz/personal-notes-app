import React from "react";
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import { getInitialData, showFormattedDate } from '../utils/index';
import NoteItem from "./NoteItem";

class PersonalNotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData()
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
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
        console.log(this.state.notes);
        return (
            <>
                <NoteHeader />
                <NoteInput addNote={this.onAddNoteHandler} />
                <NoteItem />
            </>
        )
    }
}

export default PersonalNotesApp;