import React from 'react';
import ClassList from '../../utils/classList';

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    React.PropsWithChildren {
  isHead?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({
  className = '',
  isHead = false,
  ...props
}) => {
  return (
    <tr
      {...props}
      className={new ClassList(
        isHead ? 'bg-gray-500 text-white' : 'bg-blue-200',
        className
      ).compose()}
    />
  );
};

export default TableRow;