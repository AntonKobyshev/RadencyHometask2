import React from "react";
import styles from "./Table.module.css";

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    React.PropsWithChildren {
  head?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({
  children,
  head,
  className,
  ...props
}) => {
  return (
    <table {...props} className={className + " " + styles.table}>
      <thead>{head}</thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
