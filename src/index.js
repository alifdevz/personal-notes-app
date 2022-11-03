import React from 'react';
import { createRoot } from 'react-dom/client';
import PersonalNotesApp from './components/PersonalNotesApp';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<PersonalNotesApp />);