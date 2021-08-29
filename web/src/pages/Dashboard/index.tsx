import React from "react";

import Sidebar from "../../components/Sidebar";

import { Container, Content, Box } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Dashboard</h1>

        <Box />
      </Content>
    </Container>
  );
};

export default Dashboard;
