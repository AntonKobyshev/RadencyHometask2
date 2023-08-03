import React from 'react';
import styles from '../TableCell/TableCell.module.css';

const TableHeaderCell: React.FC<
  React.ThHTMLAttributes<HTMLTableCellElement> & React.PropsWithChildren
> = (props) => {
  return <th {...props} className={styles.cell} />;
};

export default TableHeaderCell;
