import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid var(--darkPrimary);
`;

export const Logo = styled.img`
  width: 8rem;
`;

export const ToggleSidebar = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0;
  background-color: var(--background);
  padding: 10px;
  transition: background-color 0.25s;

  &:hover {
    background-color: var(--lightPrimary);
  }
`;
