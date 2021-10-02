import React, { useCallback, useRef, useState } from "react";

import { CustomInput, CurrencyInput, CurrencyInputContainer } from "./styles";

type InputType = "currency";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: boolean;
  labelText?: string;
  inputTypeStyle?: InputType;
  id: string;
}

const Input: React.FC<InputProps> = ({
  error,
  label,
  labelText,
  inputTypeStyle,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusWrapper = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

  return (
    <div>
      {label && <label htmlFor={rest.id}>{labelText}</label>}

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
    </div>
  );
};

export default Input;
