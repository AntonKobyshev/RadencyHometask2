import React from 'react';
import ClassList from '../../utils/classList';

const TableHeaderCell: React.FC<
  React.ThHTMLAttributes<HTMLTableCellElement> & React.PropsWithChildren
> = ({ className = '', ...props }) => {
  return (
    <th
      {...props}
      className={new ClassList(
        'text-ellipsis text-left overflow-hidden whitespace-nowrap px-3 py-1  ',
        className
      ).compose()}
    />
  );
};

export default TableHeaderCell;