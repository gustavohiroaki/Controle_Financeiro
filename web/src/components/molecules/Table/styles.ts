import styled from "styled-components";

interface ITableProps {
  columnNumber: number;
}

export const Container = styled.div<ITableProps>`
  width: 100%;

  & > div {
    display: grid;
    grid-template-columns: repeat(${(props) => props.columnNumber}, 1fr);
    margin-bottom: 15px;

    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const TransactionRow = styled.div``;
