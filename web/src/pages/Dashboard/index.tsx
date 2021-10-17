import React, { useEffect, useMemo, useState } from "react";

import { BoxZone, SummaryZone } from "../../components/templates/Dashboard";
import { Minus, Plus } from "../../components/atoms/Icons";
import { Summary, Table } from "../../components/molecules";
import { DashBox, BoxWrapper, ContentWrapper } from "./styles";

import api from "../../service/api";

import { toCurrency, toDate } from "../../utils/format";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get("income").then((response) => {
      setIncome(response.data);
    });
    api.get("outcome").then((response) => {
      setOutcome(response.data);
    });
    setLoading(false);
    return () => {
      setIncome([]);
      setOutcome([]);
    };
  }, []);

  const transactions = useMemo(() => {
    const tempIncome = income.map((temp) => ({
      ...temp,
      type: "income",
      value: toCurrency(temp.value),
      date: toDate(temp.created_at),
    }));
    const tempOutcome = outcome.map((temp) => ({
      ...temp,
      type: "outcome",
      value: toCurrency(temp.value),
      date: toDate(temp.created_at),
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
    <ContentWrapper>
      <SummaryZone>
        <Summary />
      </SummaryZone>

      <BoxZone>
        <BoxWrapper>
          <DashBox gridArea="area-1" />
          <DashBox gridArea="area-2">
            <h2>Últimas transações</h2>

            <Table columnNumber={4}>
              {loading ? (
                <p>Carregando...</p>
              ) : (
                transactions.map((transaction) => (
                  <div key={transaction.id}>
                    <div className="center">
                      {transaction.type === "income" && <Plus />}
                      {transaction.type === "outcome" && <Minus />}
                    </div>
                    <div className="center">
                      <span title={transaction.name}>{transaction.name}</span>
                    </div>
                    <div className="center">{transaction.value}</div>
                    <div className="center">{transaction.date}</div>
                  </div>
                ))
              )}
            </Table>
          </DashBox>
          <DashBox gridArea="area-3" />
        </BoxWrapper>
      </BoxZone>
    </ContentWrapper>
  );
};

export default Dashboard;
