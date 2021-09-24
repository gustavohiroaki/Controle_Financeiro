import React, { useEffect, useMemo, useState } from "react";
import { Formik } from "formik";

import api from "../../service/api";

import Sidebar from "../../components/Sidebar";
import { Input } from "../../components/Form";

import { Container, Content, Box, Form } from "./styles";
import { ConfirmButton } from "../../components/Buttons";
import Table from "../../components/Table";
import { toCurrency } from "../../utils/format";
import { Plus } from "../../components/Icons";

interface Transaction {
  id: string;
  name: string;
  value: number;
  created_at: string;
  updated_at: string;
}

const Income: React.FC = () => {
  const [income, setIncome] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("income").then((response) => {
      setIncome(response.data);
    });
  }, []);

  const transactions = useMemo(() => {
    const tempIncome = income.map((temp) => ({
      ...temp,
      type: "income",
      value: toCurrency(temp.value),
    }));

    const transactions = [...tempIncome];
    transactions.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateA - dateB;
    });
    return transactions;
  }, [income]);

  return (
    <Container>
      <Sidebar />
      <Content>
        <Box gridArea="area-1"></Box>

        <Box gridArea="area-2">
          <h2>Todas Entradas</h2>

          <Table columnNumber={3}>
            {transactions.map((transaction) => (
              <div key={transaction.id}>
                <div className="center">
                  {transaction.type === "income" && <Plus />}
                </div>
                <div className="center">
                  <span title={transaction.name}>{transaction.name}</span>
                </div>
                <div className="center">{transaction.value}</div>
              </div>
            ))}
          </Table>
        </Box>

        <Box gridArea="area-3" centered>
          <h2>Entrada de Dinheiro</h2>
          <Formik
            initialValues={{ name: "", value: 0 }}
            onSubmit={(incomeSubmit) => {
              api.post("income", incomeSubmit).then(({ data }) => {
                setIncome([...income, data]);
                alert(`Ganho inserido com sucesso! ${data.name}`);
              });
            }}
          >
            {({ values, errors, handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  label
                  labelText="Name"
                  autoComplete="off"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <Input
                  type="number"
                  label
                  labelText="Valor"
                  id="value"
                  name="value"
                  value={values.value}
                  onChange={handleChange}
                />

                <ConfirmButton type="submit">Send</ConfirmButton>
              </Form>
            )}
          </Formik>
        </Box>
      </Content>
    </Container>
  );
};

export default Income;
