import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 1rem 0;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #646cff;
    outline: none;
  }
`;
