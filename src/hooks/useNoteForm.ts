import { useContext } from 'react';
import NoteFormContext from '../components/NoteFormProvider/NoteFormContext';

export default function useNoteForm() {
  return useContext(NoteFormContext);
}
