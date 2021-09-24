import React, { useEffect, useMemo, useState } from "react";
import { Minus, Plus } from "../../components/Icons";

import Sidebar from "../../components/Sidebar";
import Summary from "../../components/Summary";
import Table from "../../components/Table";
import api from "../../service/api";
import { toCurrency } from "../../utils/format";

import { Container, Content, BoxWrapper, Box } from "./styles";

interface Transaction {
  id: string;
  name: string;
  value: number;
  created_at: string;
  updated_at: string;
}

const Dashboard: React.FC = () => {
  const [income, setIncome] = useState<Transaction[]>([]);
  const [outcome, setOutcome] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("income").then((response) => {
      setIncome(response.data);
    });
  }, []);

  useEffect(() => {
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
    return transactions;
  }, [income, outcome]);

  return (
    <Container>
      <Sidebar />
      <Content>
        <Summary />
        <BoxWrapper>
          <Box gridArea="area-1"></Box>
          <Box gridArea="area-2">
            <h2>Últimas transações</h2>

            <Table columnNumber={3}>
              {transactions.map((transaction) => (
                <div key={transaction.id}>
                  <div className="center">
                    {transaction.type === "income" && <Plus />}
                    {transaction.type === "outcome" && <Minus />}
                  </div>
                  <div className="center">
                    <span title={transaction.name}>{transaction.name}</span>
                  </div>
                  <div className="center">{transaction.value}</div>
                </div>
              ))}
            </Table>
          </Box>
          <Box gridArea="area-3"></Box>
        </BoxWrapper>
      </Content>
    </Container>
  );
};

export default Dashboard;
