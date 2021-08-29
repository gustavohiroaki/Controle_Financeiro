import styled from "styled-components";

interface InputProps {
  error?: boolean;
}

export const Container = styled.input<InputProps>`
  width: 300px;
  height: 50px;
  padding: 10px 20px;
  border-radius: 15px;
  transition: border 0.15s;
  border: 1px solid ${(props) => (props.error ? "red" : "var(--gray)")};

  &:focus {
    border: 1px solid var(--primary);
  }
`;
