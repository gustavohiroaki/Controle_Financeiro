import React from "react";
import { Sidebar, Topbar } from "../organisms";
import {
  Container,
  ContentZone,
  SidebarZone,
  TopbarZone,
  Main,
} from "../templates/Dashboard";

const DashboardStructure: React.FC = ({ children }) => {
  return (
    <Container>
      <TopbarZone>
        <Topbar />
      </TopbarZone>
      <Main>
        <SidebarZone>
          <Sidebar />
        </SidebarZone>
        <ContentZone>{children}</ContentZone>
      </Main>
    </Container>
  );
};

export default DashboardStructure;
