import React from "react";
import { useToggle } from "../../context/ToggleSidebar";
import { Overlay } from "../atoms";
import { Sidebar, Topbar } from "../organisms";
import {
  Container,
  ContentZone,
  SidebarZone,
  TopbarZone,
  Main,
} from "../templates/Dashboard";

const DashboardStructure: React.FC = ({ children }) => {
  const { isOpened, toggleSidebar } = useToggle();

  return (
    <Container>
      <TopbarZone>
        <Topbar />
      </TopbarZone>
      <Main>
        <SidebarZone isOpened={isOpened}>
          <Sidebar />
        </SidebarZone>
        {isOpened && <Overlay fnCall={toggleSidebar} />}
        <ContentZone>{children}</ContentZone>
      </Main>
    </Container>
  );
};

export default DashboardStructure;
