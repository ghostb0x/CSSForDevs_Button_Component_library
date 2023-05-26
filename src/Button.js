import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  let colors;
  switch (variant) {
    case "fill": {
      colors = {
        "--defaultButtonColor": COLORS.primary,
        "--hoverButtonColor": COLORS.primaryLight,
        "--defaultFontColor": COLORS.white,
        "--hoverFontColor": COLORS.white,
        "--borderStyle": `transparent 2px solid`,
        "--focusOutlineColor": COLORS.primary,
      };
      break;
    }
    case "outline": {
      colors = {
        "--defaultButtonColor": COLORS.white,
        "--hoverButtonColor": COLORS.offwhite,
        "--defaultFontColor": COLORS.primary,
        "--hoverFontColor": COLORS.primary,
        "--borderStyle": `${COLORS.primary} 2px solid`,
        "--focusOutlineColor": COLORS.primary,
      };
      break;
    }
    case "ghost": {
      colors = {
        "--defaultButtonColor": "transparent",
        "--hoverButtonColor": COLORS.transparentGray15,
        "--defaultFontColor": COLORS.gray,
        "--hoverFontColor": COLORS.black,
        "--borderStyle": `transparent 2px solid`,
        "--focusOutlineColor": COLORS.transparentGray75,
      };
      break;
    }
    default: {
      console.log("no variant provided");
    }
  }

  let sizes;

  switch (size) {
    case "small": {
      sizes = {
        "--height": "35px",
        "--border-radius": "2px",
        "--font-size": "1rem",
        "--padding": "8px 16px",
      };
      break;
    }
    case "medium": {
      sizes = {
        "--height": "53px",
        "--border-radius": "2px",
        "--font-size": "1.25rem",
        "--padding": "16px 24px",
      };
      break;
    }
    case "large": {
      sizes = {
        "--height": "65px",
        "--border-radius": "4px",
        "--font-size": `${21 / 16}rem`,
        "--padding": "20px 36px",
      };
      break;
    }
    default: {
      console.log("no size provided");
    }
  }

  const styleVars = { ...colors, ...sizes };

  return <StyledButton style={styleVars}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  text-transform: uppercase;
  line-height: 0;
  font-family: "Roboto", sans-serif;

  height: var(--height);
  border-radius: var(--border-radius);
  font-size: var(--font-size);
  padding: var(--padding);

  background-color: var(--defaultButtonColor);
  color: var(--defaultFontColor);
  border: var(--borderStyle);

  &:hover {
    background-color: var(--hoverButtonColor);
    color: var(--hoverFontColor);
  }

  &:focus {
    outline: 2px solid;
    outline-color: var(--focusOutlineColor);
    outline-offset: 3px;
  }
`;
