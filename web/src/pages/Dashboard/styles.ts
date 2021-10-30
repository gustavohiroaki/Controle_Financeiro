import styled from "styled-components";

import { Box } from "../../components/molecules";

type GridAreas = "area-1" | "area-2" | "area-3";

interface IGridAreaProps {
  gridArea: GridAreas;
}
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BoxWrapper = styled.div`
  @media (max-width: 768px) {
    grid-template-areas: "area-1" "area-2" "area-3";
    grid-template-columns: 1fr;
  }

  width: 100%;
  height: 100%;

  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "area-1 area-1 area-1" "area-2 area-3 area-3";
  column-gap: 15px;
  row-gap: 15px;
`;

export const DashBox = styled(Box)<IGridAreaProps>`
  @media (min-width: 1001px) {
    overflow-y: scroll;
  }

  grid-area: ${(props) => props.gridArea || "auto"};
`;
