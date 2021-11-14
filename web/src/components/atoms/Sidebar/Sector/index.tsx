import React from "react";
import { LinkProps } from "react-router-dom";
import { useToggle } from "../../../../context/ToggleSidebar";

import { Container } from "./styles";

interface SectorProps extends LinkProps {
  icon: React.ComponentType;
  text: string;
}

const Sector: React.FC<SectorProps> = ({ icon: Icon, text, ...rest }) => {
  const { isOpened } = useToggle();

  return (
    <Container className="sector" {...rest} isOpened={isOpened}>
      <div>
        <Icon />
      </div>
      <span>{text}</span>
    </Container>
  );
};

export default Sector;
