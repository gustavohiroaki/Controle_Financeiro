import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 425px) {
    --topBarHeight: 50px;
  }

  width: 100vw;
  height: 100vh;
  --topBarHeight: 65px;
  --contentHeight: calc(100vh - var(--topBarHeight));
`;

export const TopbarZone = styled.div`
  width: 100%;
  height: var(--topBarHeight);
`;

export const Main = styled.div`
  width: 100%;
  height: var(--contentHeight);
  display: flex;
  flex-direction: row;
`;

export const SidebarZone = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 1280px) {
    width: 25vw;
  }
  width: 20vw;
  flex-shrink: 0;
  height: var(--contentHeight);
`;

export const ContentZone = styled.div`
  width: 100%;
  height: var(--contentHeight);

  padding: 15px 30px;
`;

export const SummaryZone = styled.div`
  width: 100%;
`;

export const BoxZone = styled.div`
  width: 100%;
  height: calc(80vh - 30px);
`;
