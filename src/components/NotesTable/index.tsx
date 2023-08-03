import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  removeAllNotes,
  selectActiveNotes,
  selectArchivedNotes,
} from "../../redux/slices/notes";
import Table from "../Table";
import TableRow from "../TableRow";
import TableHeaderCell from "../TableHeaderCell";
import ArchiveButton from "../ArchiveButton";
import DeleteButton from "../DeleteButton";
import NoteRow from "./NoteRow";
import styles from "./NotesTable.module.css";

const NotesTable: React.FC = () => {
  const [showArchived, setShowArchived] = useState(false);
  const dispatch = useAppDispatch();

  const notes = useAppSelector(
    showArchived ? selectArchivedNotes : selectActiveNotes
  );

  return (
    <Table
      head={
        <TableRow>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Created</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Content</TableHeaderCell>
          <TableHeaderCell>Dates</TableHeaderCell>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>
            <ArchiveButton
              onClick={() => setShowArchived(!showArchived)}
              variant={showArchived ? "unarchive" : "archive"}
              light
            />
          </TableHeaderCell>
          <TableHeaderCell>
            <DeleteButton
              onClick={() => dispatch(removeAllNotes())}
              light
            />
          </TableHeaderCell>
        </TableRow>
      }
      className={styles.notesTable}
    >
      {notes.map((note) => (
        <NoteRow key={note.id} note={note} isArchived={showArchived} />
      ))}
    </Table>
  );
};

export default NotesTable;
