import React, { useEffect, useMemo, useState } from "react";

import api from "../../service/api";
import { toCurrency } from "../../utils/format";
import { Minus, Plus } from "../Icons";
import { Container } from "./styles";

interface Transaction {
  id: string;
  name: string;
  value: number;
  created_at: string;
  updated_at: string;
}

const Table: React.FC = () => {
  const [income, setIncome] = useState<Transaction[]>([]);
  const [outcome, setOutcome] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("income").then((response) => {
      setIncome(response.data);
    });
    api.get("outcome").then((response) => {
      setOutcome(response.data);
    });
  }, []);

  const transactions = useMemo(() => {
    const tempIncome = income.map((temp) => ({
      ...temp,
      type: "income",
      value: toCurrency(temp.value),
    }));
    const tempOutcome = outcome.map((temp) => ({
      ...temp,
      type: "outcome",
      value: toCurrency(temp.value),
    }));
    const transactions = [...tempIncome, ...tempOutcome];
    transactions.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateA - dateB;
    });
    console.log("transactions:", transactions);
    return transactions;
  }, [income, outcome]);

  return (
    <Container>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td align="center">
              {transaction.type === "income" && <Plus />}
              {transaction.type === "outcome" && <Minus />}
            </td>
            <td>
              <span title={transaction.name}>{transaction.name}</span>
            </td>
            <td>{transaction.value}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
