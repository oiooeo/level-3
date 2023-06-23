import React from "react";
import styled from "styled-components";

export const H1 = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin: 10px;
  margin-top: 30px;
`;
