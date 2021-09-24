import styled from "styled-components";

type GridAreas = "area-1" | "area-2" | "area-3";

interface IGridAreaProps {
  gridArea: GridAreas;
  centered?: boolean;
}

const Container = styled.div`
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;

  padding: 30px 30px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "area-1 area-3"
    "area-2 area-3";
  column-gap: 15px;
  row-gap: 15px;
`;

const Box = styled.div<IGridAreaProps>`
  width: 100%;
  height: 100%;
  padding: 30px 30px;

  grid-area: ${(props) => props.gridArea || "auto"};

  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.centered ? "center" : "start")};
  align-items: center;

  overflow: scroll;

  & > h2 {
    margin-bottom: 40px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
`;

export { Container, Content, Box, Form };
