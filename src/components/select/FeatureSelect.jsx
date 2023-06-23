import React from "react";
import styled from "styled-components";
import { H1 } from "../../shared/GlobalStyle";
import VisibleSelect from "./VisibleSelect";
import HiddenSelect from "./HiddenSelect";

function FeatureSelect() {
  return (
    <>
      <H1>Select</H1>
      <SelectButtons>
        <VisibleSelect />
        <HiddenSelect />
      </SelectButtons>
    </>
  );
}

const SelectButtons = styled.div`
  margin-left: 10px;
  display: flex;
  gap: 10px;
`;

export default FeatureSelect;
