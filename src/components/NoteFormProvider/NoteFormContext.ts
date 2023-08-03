import { createContext } from 'react';
import { Note } from '../../redux/slices/notes';

export type OpenNoteFormFunction = (note: Note | null) => void;

const NoteFormContext = createContext<OpenNoteFormFunction>(() => {
  throw new Error('Note not found.');
});

export default NoteFormContext;
