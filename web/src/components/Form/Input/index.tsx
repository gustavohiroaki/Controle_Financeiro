import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: boolean;
  labelText?: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ error, label, labelText, ...rest }) => {
  return (
    <div>
      {label && <label htmlFor={rest.id}>{labelText}</label>}
      <Container {...rest} />
    </div>
  );
};

export default Input;
