import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  height: 3rem;

  border: 0;
  border-radius: 15px 0 0 15px;
  font-size: 0.85rem;

  display: flex;
  align-items: center;

  background-color: var(--transparentBackground);

  color: var(--font);

  div {
    height: 100%;

    margin-right: 20%;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 0 0 15px;

    svg {
      width: 50%;
      height: 50%;
    }
  }

  & + & {
    margin-top: 10px;
  }
`;
