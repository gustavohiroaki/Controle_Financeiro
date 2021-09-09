import React from "react";

import { Minus, Plus } from "../../components/Icons";
import Sidebar from "../../components/Sidebar";
import Summary from "../../components/Summary";
import Table from "../../components/Table";

import { Container, Content, BoxWrapper, Box } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Summary />
        <BoxWrapper>
          <Box>
            <h2>Últimas transações</h2>

            <Table />
          </Box>
          <Box>
            <Plus />
            <Minus />
          </Box>
        </BoxWrapper>
      </Content>
    </Container>
  );
};

export default Dashboard;
