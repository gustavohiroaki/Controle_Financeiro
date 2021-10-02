import React, { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";

import api from "../../service/api";

import Sidebar from "../../components/Sidebar";
import { Input } from "../../components/Form";

import { Container, Content, Box, Form } from "./styles";
import { ConfirmButton } from "../../components/Buttons";
import Table from "../../components/Table";
import { parseCurrency, toCurrency } from "../../utils/format";
import { Plus } from "../../components/Icons";
import { currencyMask } from "../../utils/masks";

interface Transaction {
  id: string;
  name: string;
  value: number;
  created_at: string;
  updated_at: string;
}

interface Category {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

const Income: React.FC = () => {
  const [income, setIncome] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    api.get("income").then((response) => {
      setIncome(response.data);
    });

    api.get("category").then((response) => {
      setCategories(response.data);
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

  const formik = useFormik({
    initialValues: {
      name: "",
      value: "",
      category: "",
    },
    onSubmit: (incomeSubmit) => {
      api
        .post("income", {
          ...incomeSubmit,
          value: parseCurrency(incomeSubmit.value),
        })
        .then(({ data }) => {
          setIncome([...income, data]);
          alert(`Ganho inserido com sucesso! ${data.name}`);
        });
    },
  });

  useEffect(() => {
    let tempValue = currencyMask(formik.values.value);
    formik.setFieldValue("value", tempValue);
    console.log(formik.values.value);
  }, [formik.values.value]);

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

          <Form onSubmit={formik.handleSubmit}>
            <Input
              label
              labelText="Name"
              autoComplete="off"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <select name="category" id="category">
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
            <Input
              label
              labelText="Valor"
              id="value"
              name="value"
              inputTypeStyle="currency"
              value={formik.values.value}
              onChange={formik.handleChange}
            />

            <ConfirmButton type="submit">Send</ConfirmButton>
          </Form>
        </Box>
      </Content>
    </Container>
  );
};

export default Income;
