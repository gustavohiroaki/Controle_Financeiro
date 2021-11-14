import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface SectorProps extends LinkProps {
  isOpened: boolean;
}

export const Container = styled(Link)<SectorProps>`
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
    width: ${(props) => (props.isOpened ? "2.5rem" : "100%")};

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

  span {
    white-space: nowrap;
    display: ${(props) => (props.isOpened ? "block" : "none")};
  }

  & + & {
    margin-top: 10px;
  }
`;
