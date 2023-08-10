import React, { FC, useMemo } from "react";
import categories from "../../../config/categories";
import CategoryIcon from "../../CategoryIcon";
import TableRow from "../../TableRow";
import TableCell from "../../TableCell";
import { useAppSelector } from "../../../redux/hooks";
import {
  selectActiveNotes,
  selectArchivedNotes,
} from "../../../redux/slices/notes";

export interface CategorySummaryRowProps {
  categoryIndex: number;
}

const CategorySummaryRow: FC<CategorySummaryRowProps> = ({ categoryIndex }) => {
  const activeNotes = useAppSelector(selectActiveNotes);
  const archivedNotes = useAppSelector(selectArchivedNotes);

  const category = categories[categoryIndex];

  const memoizedCounts = useMemo(() => {
    const activeNotesNumber = activeNotes.reduce(
      (count, note) =>
        note.categoryIndex === categoryIndex ? count + 1 : count,
      0
    );

    const archivedNotesNumber = archivedNotes.reduce(
      (count, note) =>
        note.categoryIndex === categoryIndex ? count + 1 : count,
      0
    );

    return { activeNotesNumber, archivedNotesNumber };
  }, [activeNotes, archivedNotes, categoryIndex]);

  return (
    <TableRow>
      <TableCell>
        <CategoryIcon url={category.iconUrl} />
      </TableCell>
      <TableCell className="font-bold">{category.name}</TableCell>
      <TableCell>{memoizedCounts.activeNotesNumber}</TableCell>
      <TableCell>{memoizedCounts.archivedNotesNumber}</TableCell>
    </TableRow>
  );
};

export default CategorySummaryRow;
