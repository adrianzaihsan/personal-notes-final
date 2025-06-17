import React from 'react';

function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">{title}</h3>
      <small className="note-item__date">{new Date(createdAt).toLocaleString()}</small>
      <p className="note-item__body">{body}</p>
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>
    </div>
  );
}

export default NoteItem;
