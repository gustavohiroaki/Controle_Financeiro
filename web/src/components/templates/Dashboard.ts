import styled, { css } from "styled-components";

interface SidebarProps {
  isOpened: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - var(--topBarHeight));
  margin-top: var(--topBarHeight);
`;

export const TopbarZone = styled.div`
  z-index: 600;
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--topBarHeight);
`;

export const Main = styled.div`
  width: 100%;
  height: var(--contentHeight);
  display: flex;
  flex-direction: row;
`;

export const SidebarZone = styled.div<SidebarProps>`
  z-index: 600;
  position: fixed;
  top: var(--topBarHeight);
  left: 0;
  bottom: 0;
  transition: transform 0.5s;
  ${(props) =>
    props.isOpened
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(-80vw);
        `}

  aside {
    width: 80vw;
    max-width: 400px;
    z-index: 700;
  }
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
  @media (min-width: 1000px) {
    overflow: scroll;
  }

  width: 100%;
`;
