import styled from "styled-components";

interface ButtonProps {
  fullWidth?: boolean;
  width?: string;
}

export const Container = styled.button<ButtonProps>`
  width: ${(props) =>
    props.fullWidth ? "100%" : props.width ? props.width : "200px"};
  height: 50px;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--primary);
  color: var(--white);
  border-radius: 15px;
`;
