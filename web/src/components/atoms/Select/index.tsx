import { CSSProperties } from "react";
import Select, { ControlProps, OptionProps } from "react-select";

const customStyles = {
  option: (provided: CSSProperties, state: OptionProps) => ({
    ...provided,
    color: "#444444",
    padding: 20,
  }),
  control: (provided: CSSProperties, state: ControlProps) => ({
    ...provided,
    width: 300,
    height: 50,
    borderRadius: 15,
    borderColor: state.isFocused ? "#1268EA" : "#D3D3D3",
  }),
} as object;

const SelectComponent: Select = ({ options, ...rest }) => {
  return <Select styles={customStyles} options={options} {...rest} />;
};

export default SelectComponent;
