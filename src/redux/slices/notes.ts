import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import deleteIfFound from '../../utils/deleteIfFound';

import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

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

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}


const initialState: NotesSlice = {
  active: [
    {
      id: crypto.randomUUID(),
      name: 'Shopping list',
      categoryIndex: 0,
      content: 'Tomatoes, bread',
      createdDate: formatDate(new Date().toLocaleDateString()),
    },
    {
      id: crypto.randomUUID(),
      name: 'The theory of evolution',
      categoryIndex: 0,
      content: `The evolution theory learn`,
      createdDate: new Date().toLocaleDateString(),
    },
    {
      id: crypto.randomUUID(),
      name: 'New Feature',
      content: 'Implement new feature 3/5/2021, 5/5/2021',
      categoryIndex: 1,
      createdDate: formatDate(new Date().toLocaleDateString()),
    },
    {
      id: crypto.randomUUID(),
      name: 'Some idea',
      content: 'Find solution',
      categoryIndex: 2,
      createdDate: formatDate(new Date().toLocaleDateString()),
    },
    {
      id: crypto.randomUUID(),
      name: 'Plan weekend trip',
      content: 'Write weekend trip',
      categoryIndex: 0,
      createdDate: formatDate(new Date().toLocaleDateString()),
    },
     {
      id: crypto.randomUUID(),
      name: 'Changes',
      content: 'Change something in your life',
      categoryIndex: 1,
      createdDate: formatDate(new Date().toLocaleDateString()),
    },
      {
      id: crypto.randomUUID(),
      name: 'Running',
      content: 'Run 10km in 45min',
      categoryIndex: 1,
      createdDate: formatDate(new Date().toLocaleDateString()),
    },
  ],
  archived: [
    {
      id: crypto.randomUUID(),
      name: 'Books',
      content: 'Read 10 new books till the end of the year',
      categoryIndex: 1,
      createdDate: formatDate(new Date().toLocaleDateString()),
    },
    {
      id: crypto.randomUUID(),
      name: 'Appointment',
      content: 'Go to the appointment with Sara 20/10/2023',
      categoryIndex: 2,
      createdDate: formatDate(new Date().toLocaleDateString()),
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

export const removeAllNotes = (): AppThunk => (dispatch, getState) => {
  const allNotes = [...getState().notes.active, ...getState().notes.archived];
  const allNoteIds = allNotes.map((note) => note.id);

  allNoteIds.forEach((noteId) => {
    dispatch(remove(noteId));
  });
};