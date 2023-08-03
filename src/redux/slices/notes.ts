import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import deleteIfFound from '../../utils/deleteIfFound';

export interface Note {
  id: string;
  name: string;
  content?: string;
  categoryIndex: number;
  createdDate: string;
}

export interface NoteUpdate {
  name?: string;
  content?: string;
  categoryIndex?: number;
}

export interface NotesSlice {
  active: Note[];
  archived: Note[];
}

const initialState: NotesSlice = {
  active: [
    {
      id: crypto.randomUUID(),
      name: 'Shopping',
      categoryIndex: 0,
      content: 'Go shopping on 02/03/2022 or 05.03.2022.',
      createdDate: new Date().toLocaleDateString(),
    },
    {
      id: crypto.randomUUID(),
      name: 'Dantist appointment',
      categoryIndex: 0,
      content: `I’m gonna have a dentist appointment on the 3/5/2021,
I moved it from 5/5/2021`,
      createdDate: new Date().toLocaleDateString(),
    },
    {
      id: crypto.randomUUID(),
      name: 'Note #3',
      content: 'Content of the note #2',
      categoryIndex: 1,
      createdDate: new Date().toLocaleDateString(),
    },
    {
      id: crypto.randomUUID(),
      name: 'Note #4',
      content: 'Content of the note #4',
      categoryIndex: 2,
      createdDate: new Date().toLocaleDateString(),
    },
    {
      id: crypto.randomUUID(),
      name: 'Note #5',
      content: 'Content of the note #5',
      categoryIndex: 0,
      createdDate: new Date().toLocaleDateString(),
    },
  ],
  archived: [
    {
      id: crypto.randomUUID(),
      name: 'Note #6',
      content: 'Content of the note #6',
      categoryIndex: 1,
      createdDate: new Date().toLocaleDateString(),
    },
    {
      id: crypto.randomUUID(),
      name: 'Note #7',
      content: 'Content of the note #7',
      categoryIndex: 2,
      createdDate: new Date().toLocaleDateString(),
    },
  ],
};

function generateNoteIdCheckPredicate(noteId: Note['id']) {
  return (note: Note) => note.id === noteId;
}

function getNoteById(state: NotesSlice, noteId: Note['id']) {
  const noteHasNeededId = generateNoteIdCheckPredicate(noteId);

  return (
    state.archived.find(noteHasNeededId) || state.active.find(noteHasNeededId)
  );
}

function deleteNote(state: NotesSlice, noteId: Note['id']) {
  const noteHasNeededId = generateNoteIdCheckPredicate(noteId);

  deleteIfFound(state.active, noteHasNeededId) ||
    deleteIfFound(state.archived, noteHasNeededId);
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Note>) => {
      state.active.push(action.payload);
    },
    remove: (state, action: PayloadAction<Note['id']>) => {
      deleteNote(state, action.payload);
    },
    update: (
      state,
      action: PayloadAction<{
        noteId: Note['id'];
        update: NoteUpdate;
      }>
    ) => {
      const note = getNoteById(state, action.payload.noteId);

      if (note !== undefined) Object.assign(note, action.payload.update);
    },
    archive: (state, action: PayloadAction<Note['id']>) => {
      const note = getNoteById(state, action.payload);

      if (note !== undefined) {
        deleteNote(state, action.payload);
        state.archived.push(note);
      }
    },
    unarchive: (state, action: PayloadAction<Note['id']>) => {
      const note = getNoteById(state, action.payload);

      if (note !== undefined) {
        deleteNote(state, action.payload);
        state.active.push(note);
      }
    },
  },
});

export const { add, remove, update, archive, unarchive } = notesSlice.actions;

export const selectActiveNotes = (state: RootState) => state.notes.active;
export const selectArchivedNotes = (state: RootState) => state.notes.archived;

export default notesSlice.reducer;
