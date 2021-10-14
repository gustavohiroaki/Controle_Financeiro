import React, { LabelHTMLAttributes } from "react";

import { Container } from "./styles";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  labelText: string;
  id: string;
}

const InputLabel: React.FC<LabelProps> = ({ children, id, labelText }) => {
  return (
    <Container>
      <label htmlFor={id}>{labelText}</label>
      {children}
    </Container>
  );
};

export default InputLabel;
