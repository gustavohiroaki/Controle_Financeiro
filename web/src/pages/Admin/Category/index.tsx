import React from "react";
import { useFormik } from "formik";
import { Input, Buttons } from "../../../components/atoms";
import { InputLabel } from "../../../components/molecules";
import { Container, CategoryForm } from "./styles";

const CategoryConfig: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (addCategory) => {
      console.log(addCategory);
    },
  });

  return (
    <Container>
      <CategoryForm onSubmit={formik.handleSubmit}>
        <h3>Text</h3>
        <InputLabel id="name" labelText="Nome da nova categoria">
          <Input
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            autoComplete="off"
          />
        </InputLabel>
        <Buttons.ConfirmButton type="submit">Enviar</Buttons.ConfirmButton>
      </CategoryForm>
    </Container>
  );
};

export default CategoryConfig;
