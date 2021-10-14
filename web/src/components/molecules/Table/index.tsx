import React from "react";

import { Container } from "./styles";

interface ITableProps extends React.HTMLAttributes<HTMLDivElement> {
  columnNumber: number;
}

const Table: React.FC<ITableProps> = ({ columnNumber, children }) => {
  return <Container columnNumber={columnNumber}>{children}</Container>;
};

export default Table;
