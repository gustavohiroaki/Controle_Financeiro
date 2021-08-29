import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.aside`
  @media (max-width: 1000px) {
    display: none;
  }

  width: 30vw;
  max-width: 440px;
  height: 100vh;

  padding: 30px 0 0 30px;

  background-color: var(--primary);

  display: flex;
  flex-direction: column;
`;

const TopSection = styled.section`
  width: 100%;
  height: 20vh;

  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 8rem;
  margin-bottom: 20px;
`;

const Learn = styled.button`
  width: 100%;
  height: 4rem;

  border: 0;
  border-radius: 15px 0 0 15px;

  background-color: var(--font);
  color: var(--textTitle);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;

  overflow: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  color: var(--font);
`;

const Sector = styled(Link)`
  width: 100%;
  height: 3rem;

  border: 0;
  border-radius: 15px 0 0 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--transparentBackground);

  color: var(--font);

  & + & {
    margin-top: 10px;
  }
`;

export { Container, TopSection, Logo, Section, Sector, Learn };