import React, { useCallback, useContext, useState } from "react";

interface ToggleSidebarProps {
  isOpened: boolean;
  toggleSidebar: () => void;
}

export const ToggleSidebar = React.createContext({} as ToggleSidebarProps);

export const ToggleSidebarWrapper: React.FC = ({ children }) => {
  const [opened, setOpened] = useState(false);

  const toggleSidebar = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  return (
    <ToggleSidebar.Provider
      value={{
        isOpened: opened,
        toggleSidebar,
      }}
    >
      {children}
    </ToggleSidebar.Provider>
  );
};

export function useToggle() {
  const context = useContext(ToggleSidebar);

  if (!context)
    throw new Error("useToggle must be wrapped with ToggleSidebarWrapper");

  return context;
}
