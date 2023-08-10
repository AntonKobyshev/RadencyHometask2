import React from 'react';
import ClassList from '../../utils/classList';

const TableCell: React.FC<
  React.TdHTMLAttributes<HTMLTableCellElement> & React.PropsWithChildren
> = ({ className = '', ...props }) => {
  return (
    <td
      {...props}
      className={
        new ClassList(
        'text-ellipsis overflow-hidden whitespace-nowrap text-gray-600 px-3 py-1',
        className
        ).compose()
      }
    />
  );
};

export default TableCell;