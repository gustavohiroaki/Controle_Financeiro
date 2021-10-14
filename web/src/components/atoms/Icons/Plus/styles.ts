import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--lightPrimary);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  svg {
    color: var(--primary);
    height: 25px;
    width: 25px;
  }
`;
