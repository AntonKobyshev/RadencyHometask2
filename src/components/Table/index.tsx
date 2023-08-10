import React from "react";
import ClassList from '../../utils/classList';

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
  const tableStyles: React.CSSProperties = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 10px",
  };

  return (
    <table {...props} style={tableStyles} className={new ClassList(className).compose()}>
      <thead>{head}</thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
