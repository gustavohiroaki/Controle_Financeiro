import React from "react";

import Sidebar from "../../components/Sidebar";
import Summary from "../../components/Summary";

import { Container, Content, Box } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Dashboard</h1>
        <Summary />
        {/* <Box /> */}
      </Content>
    </Container>
  );
};

export default Dashboard;
