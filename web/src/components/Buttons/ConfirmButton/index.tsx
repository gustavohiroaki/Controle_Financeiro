import React from "react";

import { Container } from "./styles";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const ConfirmButton: React.FC<ButtonProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ConfirmButton;
