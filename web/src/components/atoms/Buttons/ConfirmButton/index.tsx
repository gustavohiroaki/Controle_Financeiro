import React from "react";

import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ConfirmButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default ConfirmButton;
