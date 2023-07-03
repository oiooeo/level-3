import React from "react";
import styled from "styled-components";

export const P = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

const StyledP = styled.p`
  font-size: 35px;
  font-weight: 700;
  margin: 10px;
  margin-top: 30px;
`;
