import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Content = styled.main`
  width: 100%;
  height: 100%;

  padding: 30px 30px;

  display: flex;
  flex-direction: column;
`;

const BoxWrapper = styled.div`
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    row-gap: 15px;
  }

  width: 100%;
  height: calc(100vh - 250px);

  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  column-gap: 15px;
`;

const Box = styled.div`
  @media (min-width: 1001px) {
    overflow-y: scroll;
  }
  padding: 15px 25px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & > h2 {
    margin-bottom: 20px;
  }
`;

export { Container, Content, BoxWrapper, Box };
