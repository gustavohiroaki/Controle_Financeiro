import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const SidebarZone = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 1440px) {
    width: 25vw;
  }
  width: 20vw;
  flex-shrink: 0;
  height: 100vh;
`;

export const ContentZone = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  padding: 15px 30px;
`;

export const SummaryZone = styled.div`
  width: 100%;
  height: 20vh;
`;

export const BoxZone = styled.div`
  width: 100%;
  height: 80vh;
`;
