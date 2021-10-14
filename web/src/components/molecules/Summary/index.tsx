import React, { useEffect, useMemo, useState } from "react";
import api from "../../../service/api";
import { toCurrency } from "../../../utils/format";

import { Container, Greeting, SummaryContent, Content } from "./styles";

interface Balance {
  incomeTotal: number;
  outcomeTotal: number;
  remaining: number;
}

const Summary: React.FC = () => {
  const [balance, setBalance] = useState<Balance>({
    incomeTotal: 0,
    outcomeTotal: 0,
    remaining: 0,
  });

  useEffect(() => {
    api.get("balance").then((balance) => {
      setBalance(balance.data);
    });
  }, [balance]);

  const incomeTotal = useMemo(
    () => toCurrency(balance?.incomeTotal),
    [balance]
  );

  const outcomeTotal = useMemo(
    () => toCurrency(balance?.outcomeTotal),
    [balance]
  );

  const remaining = useMemo(() => toCurrency(balance?.remaining), [balance]);

  return (
    <Container>
      <Greeting>
        Bom dia, <strong>Gustavo!</strong>
      </Greeting>

      <SummaryContent>
        <Content>
          <h4>Entrada</h4>
          <div>{incomeTotal}</div>
        </Content>
        <Content>
          <h4>Saída</h4>
          <div>{outcomeTotal}</div>
        </Content>
        <Content>
          <h4>Total</h4>
          <div>{remaining}</div>
        </Content>
      </SummaryContent>
    </Container>
  );
};

export default Summary;
