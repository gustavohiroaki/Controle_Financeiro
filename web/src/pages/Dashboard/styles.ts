import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Content = styled.main`
  width: 100%;
  height: 100vh;

  padding: 30px 30px;
`;

const Box = styled.div`
  width: 100%;
  height: 95%;
  padding: 30px 30px;

  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export { Container, Content, Box };
