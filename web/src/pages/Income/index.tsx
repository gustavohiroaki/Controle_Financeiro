import React, { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";

import { Input, Select } from "../../components/atoms";
import { Plus } from "../../components/atoms/Icons";
import { ConfirmButton } from "../../components/atoms/Buttons";
import { InputLabel, Table } from "../../components/molecules";
import { ContentWrapper, IncomeBox, Form } from "./styles";

import api from "../../service/api";
import { parseCurrency, toCurrency } from "../../utils/format";
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

interface SelectProps {
  value: string;
  label: string;
}

const Income: React.FC = () => {
  const [income, setIncome] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<SelectProps[]>();

  useEffect(() => {
    api.get("income").then((response) => {
      setIncome(response.data);
    });

    api.get<Category[]>("category").then((response) => {
      const selectCategories = response.data.map((category) => ({
        value: category.id,
        label: category.name,
      }));
      setCategories(selectCategories);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.value]);

  return (
    <ContentWrapper>
      <IncomeBox gridArea="area-1" />
      <IncomeBox gridArea="area-2">
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
      </IncomeBox>

      <IncomeBox gridArea="area-3" centered main>
        <h2>Entrada de Dinheiro</h2>

        <Form onSubmit={formik.handleSubmit}>
          <InputLabel id="name" labelText="Nome">
            <Input
              autoComplete="off"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </InputLabel>

          <InputLabel id="category" labelText="Categoria">
            <Select options={categories} name="category" id="category" />
          </InputLabel>

          <InputLabel id="value" labelText="Valor">
            <Input
              id="value"
              name="value"
              inputTypeStyle="currency"
              value={formik.values.value}
              onChange={formik.handleChange}
              autoComplete="off"
            />
          </InputLabel>

          <ConfirmButton type="submit">Send</ConfirmButton>
        </Form>
      </IncomeBox>
    </ContentWrapper>
  );
};

export default Income;
