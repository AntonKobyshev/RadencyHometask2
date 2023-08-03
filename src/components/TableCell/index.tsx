import React from 'react';
import styles from './TableCell.module.css';

const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement> & React.PropsWithChildren> = (props) => {
  return <td {...props} className={styles.cell} />;
};

export default TableCell;
