import React from "react";

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
          <Box gridArea="area-1"></Box>
          <Box gridArea="area-2">
            <h2>Últimas transações</h2>

            <Table />
          </Box>
          <Box gridArea="area-3"></Box>
        </BoxWrapper>
      </Content>
    </Container>
  );
};

export default Dashboard;
