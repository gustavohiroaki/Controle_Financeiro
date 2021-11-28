import React, { useCallback, useState } from "react";
import { Container, ChoiceConfig, ConfigBox } from "./styles";

import { Button } from "../../components/atoms/Buttons";

import CategoryConfig from "./Category";

type AvailableConfigs = "none" | "category";

const Admin: React.FC = () => {
  const [renderedComponent, setRenderedComponent] =
    useState<AvailableConfigs>("none");

  const chooseConfig = useCallback((configName: AvailableConfigs) => {
    setRenderedComponent(configName);
  }, []);

  return (
    <Container>
      <ChoiceConfig>
        <Button fullWidth onClick={() => chooseConfig("category")}>
          Categoria
        </Button>
      </ChoiceConfig>
      <ConfigBox>
        {renderedComponent === "category" && <CategoryConfig />}
      </ConfigBox>
    </Container>
  );
};

export default Admin;
