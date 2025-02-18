import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  border: 2px solid #007bff;
  border-radius: 3px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  transition: background-color 150ms;

  &:checked {
    background-color: #007bff;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;
