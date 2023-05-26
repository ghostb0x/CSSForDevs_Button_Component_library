import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  let defaultButtonColor;
  let hoverButtonColor;
  let defaultFontColor;
  let hoverFontColor;
  let borderStyle;
  let focusOutlineColor;

  if (variant === "fill") {
    defaultButtonColor = COLORS.primary;
    hoverButtonColor = COLORS.primaryLight;
    defaultFontColor = COLORS.white;
    hoverFontColor = COLORS.white;
    borderStyle = `none`;
    focusOutlineColor = COLORS.primary;
  } else if (variant === "outline") {
    defaultButtonColor = COLORS.white;
    hoverButtonColor = COLORS.offwhite;
    defaultFontColor = COLORS.primary;
    hoverFontColor = COLORS.primary;
    borderStyle = `${COLORS.primary} 2px solid`;
    focusOutlineColor = COLORS.primary;
  } else if (variant === "ghost") {
    defaultButtonColor = "transparent";
    hoverButtonColor = COLORS.transparentGray15;
    defaultFontColor = COLORS.gray;
    hoverFontColor = COLORS.black;
    borderStyle = `none`;
    focusOutlineColor = COLORS.transparentGray75;
  }

  const colorGroup = {
    defaultButtonColor: defaultButtonColor,
    hoverButtonColor: hoverButtonColor,
    defaultFontColor: defaultFontColor,
    hoverFontColor: hoverFontColor,
    borderStyle: borderStyle,
    focusOutlineColor: focusOutlineColor
  };

  let sizes;

  switch (size) {
    case "small": {
      sizes = {
        "--height": "35px",
        "--border-radius": "2px",
        "--font-size": "16px",
        "--font-family": "Roboto",
        "--padding": "8px 16px"
      };
      break;
    }
    case "medium": {
      sizes = {
        "--height": "53px",
        "--border-radius": "2px",
        "--font-size": "18px",
        "--font-family": "Roboto",
        "--padding": "16px 24px"
      };
      break;
    }
    case "large": {
      sizes = {
        "--height": "65px",
        "--border-radius": "4px",
        "--font-size": "21px",
        "--font-family": "Roboto",
        "--padding": "20px 36px"
      };
      break;
    }
    default: {
      console.log("no size provided");
    }
  }

  return (
    <StyledButton colors={colorGroup} style={sizes}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  height: var(--height);
  border-radius: var(--border-radius);
  font-size: var(--font-size);
  font-family: var(--font-family);
  padding: var(--padding);
  text-transform: uppercase;
  line-height: 0;

  background-color: ${(props) => props.colors.defaultButtonColor};
  color: ${(props) => props.colors.defaultFontColor};
  border: ${(props) => props.colors.borderStyle};

  &:hover {
    background-color: ${(props) => props.colors.hoverButtonColor};
    color: ${(props) => props.colors.hoverFontColor};
  }

  &:focus {
    outline: 2px solid;
    outline-color: ${(props) => props.colors.focusOutlineColor};
    outline-offset: 3px;
  }
`;
