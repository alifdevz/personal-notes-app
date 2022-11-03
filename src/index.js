import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteInput from './components/NoteInput';
import './styles/style.css';
import { getInitialData, showFormattedDate } from './utils/index';



const root = createRoot(document.getElementById('root'));
root.render(<NoteInput />);