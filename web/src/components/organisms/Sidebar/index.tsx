import { Container, TopSection, Learn, Section, Sector } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <TopSection>
        <Learn>
          <h4>Aprenda a Poupar</h4>
        </Learn>
      </TopSection>

      <Section>
        <h3>Controle</h3>

        <Sector to="/income">Entrada de Dinheiro</Sector>

        <Sector to="/outcome">Saída de Dinheiro</Sector>

        <Sector to="/test">Página Teste</Sector>
      </Section>
    </Container>
  );
};

export default Sidebar;
