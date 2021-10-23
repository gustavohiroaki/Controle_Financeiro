import React, { useCallback, useState } from "react";

import { CustomInput, CurrencyInput, CurrencyInputContainer } from "./styles";

type InputType = "currency";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  inputTypeStyle?: InputType;
  id: string;
}

const Input: React.FC<InputProps> = ({ error, inputTypeStyle, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusWrapper = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

  return (
    <>
      {inputTypeStyle === "currency" && (
        <CurrencyInputContainer isFocused={isFocused}>
          <span>R$</span>
          <CurrencyInput
            onFocus={handleFocusWrapper}
            onBlur={handleFocusWrapper}
            {...rest}
          />
        </CurrencyInputContainer>
      )}
      {!inputTypeStyle && <CustomInput {...rest} />}
    </>
  );
};

export default Input;
