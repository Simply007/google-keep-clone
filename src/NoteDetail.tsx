import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNotes, saveNotes } from './utils';
import type { Note } from './types';

export default function NoteDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState<Note | undefined>();

  useEffect(() => {
    const found = getNotes().find((n) => n.guid === id);
    if (!found) {
      navigate('/');
    } else {
      setNote(found);
    }
  }, [id, navigate]);

  const handleChange = (field: keyof Note, value: string) => {
    if (!note) return;
    const updatedNote = {
      ...note,
      [field]: field === 'title' ? value.slice(0, 200) : value,
      modified: Date.now(),
    };
    setNote(updatedNote);
    const notes = getNotes().map((n) => (n.guid === note.guid ? updatedNote : n));
    saveNotes(notes);
  };

  if (!note) return null;

  return (
    <div className="note-detail-container">
      <button className="back-btn" onClick={() => navigate('/')}>Back</button>
      <div className="note-detail-form">
        <input
          className="note-title-input"
          type="text"
          value={note.title}
          maxLength={200}
          placeholder="Title"
          onChange={(e) => handleChange('title', e.target.value)}
        />
        {/* This is where the CKeditor will be */}
        <textarea
          className="note-content-textarea"
          value={note.content}
          placeholder="Take a note..."
          onChange={(e) => handleChange('content', e.target.value)}
        />
        <div className="note-timestamps">
          <small>Created: {new Date(note.created).toLocaleString()}</small>
          <small>Last modified: {new Date(note.modified).toLocaleString()}</small>
        </div>
      </div>
    </div>
  );
} 