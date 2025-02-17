import React from "react";
import { InputContainer, InputField } from "./style";

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <InputContainer>
      <InputField
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="input-field"
      />
    </InputContainer>
  );
};

export default Input;
