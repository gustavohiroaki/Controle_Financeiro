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

const Box = styled.div`
  width: 100%;
  height: 95%;
  padding: 30px 30px;

  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
`;

export { Container, Content, Box, Form };
