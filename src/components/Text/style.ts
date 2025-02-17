import styled from "styled-components";

export enum TextSize {
  title = "title",
  subtitle = "subtitle",
  body = "body",
  small = "small",
}

const variants = {
  [TextSize.title]: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  [TextSize.subtitle]: {
    fontSize: "20px",
    fontWeight: "600",
  },
  [TextSize.body]: {
    fontSize: "16px",
    fontWeight: "400",
  },
  [TextSize.small]: {
    fontSize: "14px",
    fontWeight: "300",
  },
};

interface StyledTextProps {
  variant: TextSize;
  color?: string;
  margin?: string;
}

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) => variants[props.variant].fontSize};
  font-weight: ${(props) => variants[props.variant].fontWeight};
  color: ${(props) => props.color || "inherit"};
  margin: ${(props) => props.margin || "0"};
`;
