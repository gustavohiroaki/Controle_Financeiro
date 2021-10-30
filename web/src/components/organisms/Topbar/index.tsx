import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/vectors/logo.svg";

import { Container, Logo } from "./styles";

const Topbar: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={logoImg} alt="" />
      </Link>
    </Container>
  );
};

export default Topbar;
