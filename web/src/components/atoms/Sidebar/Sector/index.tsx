import React from "react";
import { LinkProps } from "react-router-dom";

import { Container } from "./styles";

interface SectorProps extends LinkProps {
  icon: React.ComponentType;
  text: string;
}

const Sector: React.FC<SectorProps> = ({ icon: Icon, text, ...rest }) => {
  return (
    <Container className="sector" {...rest}>
      <div>
        <Icon />
      </div>
      <span>{text}</span>
    </Container>
  );
};

export default Sector;
