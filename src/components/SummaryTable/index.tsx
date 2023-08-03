import React from "react";
import Table from "../Table";
import TableRow from "../TableRow";
import TableHeaderCell from "../TableHeaderCell";
import categories from "../../config/categories";
import CategorySummaryRow from "./CategorySummaryRow";
import styles from "./SummaryTable.module.css";

const SummaryTable: React.FC = () => {
  return (
    <Table
      head={
        <TableRow>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>Note Category</TableHeaderCell>
          <TableHeaderCell>Active</TableHeaderCell>
          <TableHeaderCell>Archived</TableHeaderCell>
        </TableRow>
      }
      className={styles.summaryTable}
    >
      {categories.map((category, categoryIndex) => (
        <CategorySummaryRow key={categoryIndex} categoryIndex={categoryIndex} />
      ))}
    </Table>
  );
};

export default SummaryTable;
