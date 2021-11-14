import styled, { css } from "styled-components";
import { Box } from "../../components/molecules";

type GridAreas = "area-1" | "area-2" | "area-3";

interface IGridAreaProps {
  gridArea: GridAreas;
  centered?: boolean;
  main?: boolean;
}

export const ContentWrapper = styled.div`
  @media (max-width: 768px) {
    grid-template-areas: "area-3";
    padding: 0;
  }

  width: 100%;
  height: 100%;

  padding: 30px 30px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "area-1 area-3"
    "area-2 area-3";
  column-gap: 15px;
  row-gap: 15px;
`;

export const OutcomeBox = styled(Box)<IGridAreaProps>`
  @media (max-width: 768px) {
    justify-content: start;
    align-items: unset;
    ${(props) =>
      props.main
        ? css`
            height: 80vh;
          `
        : css`
            display: none;
          `}
  }

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.centered ? "center" : "start")};
  align-items: center;

  overflow: scroll;
  grid-area: ${(props) => props.gridArea || "auto"};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 1.5rem;
  }
`;
