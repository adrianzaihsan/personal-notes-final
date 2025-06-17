import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteApp from './components/NoteApp';

// import style
import './styles/style.css';

function App() {
    return (
        <div className="note-app">
            <div className="note-app__header">
                <h1>Catatan Pribadi</h1>
        </div>
            <div className="note-app__body">
                <h2>Daftar Catatan</h2>
                </div>
                </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);