import React from "react";

class NoteHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: ''
        }

        this.onSearchKeywordChangeEventHandler = this.onSearchKeywordChangeEventHandler.bind(this);
    }

    onSearchKeywordChangeEventHandler(event) {
        this.setState({
            searchKeyword: event.target.value
        });
    }

    render() {
        return (
            <div className="header">
                <div className="note-and-search">
                    <h1>Note</h1>
                    <div className="note-search-wrapper">
                        <input className="note-search" type="text" value={this.state.searchKeyword} placeholder="Cari catatan..." onChange={this.onSearchKeywordChangeEventHandler}/>
                    </div>
                </div>
                <hr className="header-line"/>
            </div>
        )
    }
}

export default NoteHeader;