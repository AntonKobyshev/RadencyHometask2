import './App.css';
import Root from './layouts';
import useNoteForm from './hooks/useNoteForm';
import NotesTable from './components/NotesTable';
import Button from './components/CreateNoteButton';
import SummaryTable from './components/SummaryTable';

function App() {
  const openNoteForm = useNoteForm();

  return (
    <Root>
      <NotesTable />
      <Button onClick={() => openNoteForm(null)}>Create note</Button>
      <SummaryTable />
    </Root>
  );
}

export default App;
