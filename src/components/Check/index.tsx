import React from "react";
import { CheckboxContainer, StyledCheckbox } from "./style";

const Check: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => (
  <CheckboxContainer>
    <StyledCheckbox {...props} />
  </CheckboxContainer>
);

export default Check;
