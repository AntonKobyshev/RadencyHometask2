import React from "react";
import Table from "../Table";
import TableRow from "../TableRow";
import TableHeaderCell from "../TableHeaderCell";
import categories from "../../config/categories";
import CategorySummaryRow from "./CategorySummaryRow";

const SummaryTable: React.FC = () => {
  return (
    <Table
      head={
        <TableRow isHead>
          <TableHeaderCell className="w-20"/>
          <TableHeaderCell>Note Category</TableHeaderCell>
          <TableHeaderCell>Active</TableHeaderCell>
          <TableHeaderCell>Archived</TableHeaderCell>
        </TableRow>
      }
    >
      {categories.map((category, categoryIndex) => (
        <CategorySummaryRow key={categoryIndex} categoryIndex={categoryIndex} />
      ))}
    </Table>
  );
};

export default SummaryTable;
