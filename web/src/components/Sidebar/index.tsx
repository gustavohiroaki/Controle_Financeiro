import { Link } from "react-router-dom";
import logoImg from "../../assets/vectors/logo.svg";

import { Container, TopSection, Logo, Learn, Section, Sector } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <TopSection>
        <Link to="/">
          <Logo src={logoImg} alt="" />
        </Link>

        <Learn>
          <h2>Aprenda a Poupar</h2>
        </Learn>
      </TopSection>

      <Section>
        <h3>Controle</h3>

        <Sector to="/income">Entrada de Dinheiro</Sector>

        <Sector to="/outcome">Saída de Dinheiro</Sector>
      </Section>
    </Container>
  );
};

export default Sidebar;