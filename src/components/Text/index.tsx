import React from "react";
import { StyledText, TextSize } from "./style";

interface TextProps {
  variant: TextSize;
  color?: string;
  margin?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ variant, color, margin, children }) => {
  return (
    <StyledText variant={variant} color={color} margin={margin}>
      {children}
    </StyledText>
  );
};

export default Text;
