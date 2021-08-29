import React from "react";

import {
  Container,
  Greeting,
  SummaryContent,
  Income,
  Outcome,
  Total,
} from "./styles";

const Summary: React.FC = () => {
  return (
    <Container>
      <Greeting>
        Bom dia, <strong>Gustavo!</strong>
      </Greeting>

      <SummaryContent>
        <Income>
          <h4>Entrada</h4>
          <div>
            <span>R$</span> 1.000,00
          </div>
        </Income>
        <Outcome>
          <h4>Saída</h4>
          <div>
            <span>R$</span> 1.000,00
          </div>
        </Outcome>
        <Total>
          <h4>Total</h4>
          <div>
            <span>R$</span> 1.000,00
          </div>
        </Total>
      </SummaryContent>
    </Container>
  );
};

export default Summary;
