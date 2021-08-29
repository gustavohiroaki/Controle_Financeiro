import React from "react";
import { Formik } from "formik";

import api from "../../service/api";

import Sidebar from "../../components/Sidebar";
import { Input } from "../../components/Form";

import { Container, Content, Box, Form } from "./styles";
import { ConfirmButton } from "../../components/Buttons";

const Outcome: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Saída de Dinheiro</h1>

        <Box>
          <Formik
            initialValues={{ name: "", value: 0 }}
            onSubmit={(outcome) => {
              api.post("outcome", outcome).then(({ data }) => {
                alert(`Gasto inserido com sucesso! ${data.name}`);
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

export default Outcome;
