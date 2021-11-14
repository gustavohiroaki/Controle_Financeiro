import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100%;

  background-color: var(--primary);

  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.section`
  width: 100%;
  height: 30vh;

  margin-bottom: 30px;
  border-bottom: 1px solid var(--lightPrimary);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  transition: all 0.5s;
  width: 120px;
  height: 120px;

  border: 0;
  border-radius: 50%;
`;

export const Section = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 30px;

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
