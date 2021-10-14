import styled from "styled-components";

export const Box = styled.div`
  padding: 15px 25px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    margin-bottom: 40px;
  }
`;
