import styled from "styled-components";

interface InputProps {
  error?: boolean;
}

interface WrapperProps extends InputProps {
  isFocused: boolean;
}

export const CustomInput = styled.input<InputProps>`
  width: 300px;
  height: 50px;
  padding: 10px 20px;
  border-radius: 15px;
  transition: border 0.15s;
  border: 1px solid ${(props) => (props.error ? "red" : "var(--gray)")};

  &:focus {
    border: 2px solid var(--primary);
  }
`;

export const CurrencyInputContainer = styled.div<WrapperProps>`
  width: 300px;
  height: 50px;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: border 0.15s;
  border: 1px solid
    ${(props) =>
      (props.error && "red") ||
      (props.isFocused && "var(--primary)") ||
      "var(--gray)"};

  span {
    background-color: ${(props) =>
      (props.error && "red") ||
      (props.isFocused && "var(--primary)") ||
      "var(--transparentBackground)"};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    border-radius: 15px 0 0 15px;
    color: ${(props) =>
      (props.isFocused && "var(--white)") || "var(--textTitle)"};
    font-size: 1rem;
    transition: color 0.15s, background-color 0.15s;
  }
`;
export const CurrencyInput = styled.input`
  width: 80%;
  height: 40px;
  margin-left: 15px;
  border-radius: 0px 15px 15px 0px;
  border: none;
`;
