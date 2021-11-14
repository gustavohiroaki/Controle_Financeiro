import React from "react";
import { ToggleSidebarWrapper } from "./context/ToggleSidebar";
import GlobalStyles from "./global/styles";

import Router from "./router";

function App() {
  return (
    <ToggleSidebarWrapper>
      <Router />
      <GlobalStyles />
    </ToggleSidebarWrapper>
  );
}

export default App;
