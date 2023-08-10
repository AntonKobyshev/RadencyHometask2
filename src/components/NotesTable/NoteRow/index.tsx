import React from "react";
import TableRow from "../../TableRow";
import TableCell from "../../TableCell";
import EditButton from "../../EditButton";
import DeleteButton from "../../DeleteButton";
import ArchiveButton from "../../ArchiveButton";
import CategoryIcon from "../../CategoryIcon";
import { Note } from "../../../redux/slices/notes";
import findDates from "../../../utils/findDates";
import { useAppDispatch } from "../../../redux/hooks";
import { archive, unarchive, remove } from "../../../redux/slices/notes";
import categories from "../../../config/categories";
import useNoteForm from "../../../hooks/useNoteForm";

export interface NoteRowProps {
  note: Note;
  isArchived: boolean;
}

const NoteRow: React.FC<NoteRowProps> = ({ note, isArchived }) => {
  const dispatch = useAppDispatch();
  const openNoteForm = useNoteForm();

  const { categoryIndex, name, createdDate, content, id } = note;
  const noteCategory = categories[categoryIndex];

  return (
    <TableRow>
      <TableCell>
        <CategoryIcon url={noteCategory.iconUrl} />
      </TableCell>
      <TableCell className="font-bold">{name}</TableCell>
      <TableCell>{createdDate}</TableCell>
      <TableCell>{noteCategory.name}</TableCell>
      <TableCell>{content}</TableCell>
      <TableCell>{findDates(content || "").join(", ")}</TableCell>
      <TableCell>
        <EditButton onClick={() => openNoteForm(note)} />
      </TableCell>
      <TableCell>
        <ArchiveButton
          variant={isArchived ? "unarchive" : "archive"}
          onClick={() => dispatch((isArchived ? unarchive : archive)(id))}
        />
      </TableCell>
      <TableCell>
        <DeleteButton onClick={() => dispatch(remove(id))} />
      </TableCell>
    </TableRow>
  );
};

export default NoteRow;
