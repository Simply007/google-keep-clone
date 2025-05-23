import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNotes, saveNotes, generateGUID } from './utils';
import type { Note } from './types';

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleNewNote = () => {
    const now = Date.now();
    const newNote: Note = {
      guid: generateGUID(),
      title: '',
      content: '',
      created: now,
      modified: now,
    };
    const updatedNotes = [newNote, ...notes];
    saveNotes(updatedNotes);
    setNotes(updatedNotes);
    navigate(`/note/${newNote.guid}`);
  };

  const handleDelete = (guid: string) => {
    const updatedNotes = notes.filter((note) => note.guid !== guid);
    saveNotes(updatedNotes);
    setNotes(updatedNotes);
  };

  return (
    <div className="notes-list-container">
      <div className="notes-header">
        <h1>Notes</h1>
        <button className="new-note-btn" onClick={handleNewNote}>New Note</button>
      </div>
      <div className="notes-tiles">
        {notes.length === 0 && <p>No notes yet.</p>}
        {notes.map((note) => (
          <div className="note-tile" key={note.guid}>
            <div className="note-tile-content" onClick={() => navigate(`/note/${note.guid}`)}>
              <h2>{note.title || <em>(No Title)</em>}</h2>
              <p className="note-preview">{note.content.slice(0, 100)}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(note.guid)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
} 