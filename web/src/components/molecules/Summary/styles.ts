import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 30px;

  background-color: var(--primary);
  color: var(--font);

  border-radius: 30px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const Greeting = styled.div`
  width: 100%;
  margin-bottom: 10px;

  font-size: 1.3rem;
  line-height: 2rem;

  border-bottom: 1px solid var(--background);
`;

export const SummaryContent = styled.div`
  width: 100%;
  height: 60px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div > div {
    span {
      font-size: 1.5rem;
    }

    font-size: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
