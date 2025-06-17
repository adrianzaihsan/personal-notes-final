import React from 'react';
import { getInitialData } from '../utils';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      title: '',
      body: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const newNote = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
      title: '',
      body: '',
    }));
  }

  onDelete(id) {
    const filteredNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: filteredNotes });
  }

  render() {
    return (
      <div className="note-app">    
        <h1>Catatan Pribadi</h1>

        <form onSubmit={this.onSubmit} className="note-input">
          <input
            type="text"
            placeholder="Judul"
            value={this.state.title}
            onChange={this.onTitleChange}
            required
          />
          <textarea
            placeholder="Isi catatan"
            value={this.state.body}
            onChange={this.onBodyChange}
            required
          />
          <button type="submit">Tambah</button>
        </form>

        <h2>Daftar Catatan</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default NoteApp;