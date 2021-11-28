import styled from "styled-components";
import { Box } from "../../components/molecules";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;

  display: flex;
  justify-content: center;
`;

export const ChoiceConfig = styled(Box)`
  width: 15%;
  max-width: 1366px;
  height: 100%;
`;

export const ConfigBox = styled(Box)`
  width: 50%;
  max-width: 1366px;
  height: 100%;

  h3 {
    margin-bottom: 20px;
  }
`;
