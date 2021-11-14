import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdBlock,
} from "react-icons/md";
import { Sector } from "../../atoms/Sidebar";
import { Container, TopSection, Avatar, Section } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <TopSection>
        <Avatar src="https://picsum.photos/200" />
      </TopSection>

      <Section>
        <Sector
          icon={MdAddCircleOutline}
          text="Entrada de Dinheiro"
          to="/income"
        />

        <Sector
          icon={MdRemoveCircleOutline}
          text="Saída de Dinheiro"
          to="/outcome"
        />

        <Sector icon={MdBlock} text="Página de Teste" to="/test" />
      </Section>
    </Container>
  );
};

export default Sidebar;
