import styled from "styled-components";

type GridAreas = "area-1" | "area-2" | "area-3";

interface IGridAreaProps {
  gridArea: GridAreas;
}

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
  @media (max-width: 768px) {
    grid-template-areas: "area-1" "area-2" "area-3";
  }

  width: 100%;
  height: calc(100vh - 250px);

  display: grid;

  grid-template-areas: "area-1 area-1 area-1" "area-2 area-3 area-3";
  column-gap: 15px;
  row-gap: 15px;
`;

const Box = styled.div<IGridAreaProps>`
  @media (min-width: 1001px) {
    overflow-y: scroll;
  }
  padding: 15px 25px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  grid-area: ${(props) => props.gridArea || "auto"};

  & > h2 {
    margin-bottom: 20px;
  }
`;

export { Container, Content, BoxWrapper, Box };
