import React from "react";
import styled, { css } from "styled-components";

// Primary Button Style
export const PrimaryButton = ({ children, ...props }) => {
  return <Primary {...props}>{children}</Primary>;
};

// Primary Button Style
export const NegativeButton = ({ children, ...props }) => {
  return <Negative {...props}>{children}</Negative>;
};

const Normal = styled.button`
  margin: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  gap: 7px;
  align-items: center;

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 200px;
          height: 50px;
        `;
      case "medium":
        return css`
          width: 130px;
          height: 45px;
        `;
      case "small":
        return css`
          width: 100px;
          height: 40px;
        `;
      default:
        return css`
          width: 100px;
          height: 40px;
        `;
    }
  }}
`;

const Primary = styled(Normal)`
  background-color: #5abaff;
  color: #001950;

  &:active {
    background-color: #a9dcff;
  }

  ${({ outlined }) => {
    if (outlined) {
      return css`
        background-color: #ffffff;
        border: 3px solid #5abaff;

        &:active {
          background-color: #eeeeee;
        }
      `;
    }
  }}
`;

const Negative = styled(Normal)`
  color: #500000;
  background-color: #ff5a5a;
  &:active {
    background-color: #ffa1a1;
  }

  ${({ outlined }) => {
    if (outlined) {
      return css`
        background-color: #ffffff;
        border: 3px solid #ff5a5a;

        &:active {
          background-color: #eeeeee;
        }
      `;
    }
  }}
`;

const Buttons = { PrimaryButton, NegativeButton };
export default Buttons;
