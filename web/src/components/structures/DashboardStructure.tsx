import React from "react";
import { Sidebar } from "../organisms";
import { Container, ContentZone, SidebarZone } from "../templates/Dashboard";

const DashboardStructure: React.FC = ({ children }) => {
  return (
    <Container>
      <SidebarZone>
        <Sidebar />
      </SidebarZone>
      <ContentZone>{children}</ContentZone>
    </Container>
  );
};

export default DashboardStructure;
