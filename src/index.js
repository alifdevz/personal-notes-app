import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteHeader from './components/NoteHeader';
import NoteInput from './components/NoteInput';
import './styles/style.css';
import { getInitialData, showFormattedDate } from './utils/index';



const root = createRoot(document.getElementById('root'));
root.render(
    <NoteHeader />
);