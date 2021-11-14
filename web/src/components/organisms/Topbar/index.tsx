import React from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logoImg from "../../../assets/vectors/logo.svg";
import { useToggle } from "../../../context/ToggleSidebar";

import { Container, Logo, ToggleSidebar } from "./styles";

const Topbar: React.FC = () => {
  const { toggleSidebar } = useToggle();

  return (
    <Container>
      <Link to="/">
        <Logo src={logoImg} alt="" />
      </Link>
      <ToggleSidebar
        onClick={() => {
          toggleSidebar();
        }}
      >
        <MdMenu />
      </ToggleSidebar>
    </Container>
  );
};

export default Topbar;
