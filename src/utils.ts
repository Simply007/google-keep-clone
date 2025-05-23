import type { Note } from "./types";

export function generateGUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const NOTES_KEY = 'notes';

export function getNotes(): Note[] {
  const notes = localStorage.getItem(NOTES_KEY);
  return notes ? JSON.parse(notes) : [];
}

export function saveNotes(notes: Note[]) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function getNoteById(guid: string): Note | undefined {
  return getNotes().find((note) => note.guid === guid);
} 