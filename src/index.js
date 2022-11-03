import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteInput from './components/NoteInput';
import './styles/style.css';
import { getInitialData, showFormattedDate } from './utils/index';



const root = createRoot(document.getElementById('root'));
root.render(
    <div className="note-app__header">
        
        <h1 className='.note-app__header h1'>Note</h1>
        <NoteInput />
        
    </div>
);