import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 17.5vh;
  padding: 20px 30px;
  margin-bottom: 35px;

  background-color: var(--primary);
  color: var(--font);

  border-radius: 30px;
`;

export const Greeting = styled.div`
  width: 100%;

  font-size: 1.3rem;
  line-height: 2rem;

  border-bottom: 1px solid var(--background);
`;

export const SummaryContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  div > div {
    span {
      font-size: 1.5rem;
    }

    font-size: 2.5rem;
  }

  @media (max-width: 1366px) {
    div > div {
      span {
        font-size: 1.5rem;
      }

      font-size: 1.5rem;
    }
  }
`;

export const Income = styled.div`
  width: 30%;
`;

export const Outcome = styled.div`
  width: 30%;
`;

export const Total = styled.div`
  width: 30%;
`;
