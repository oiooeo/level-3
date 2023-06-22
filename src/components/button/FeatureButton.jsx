import React from "react";
import { PrimaryButton, NegativeButton } from "./StyledButton";
import styled from "styled-components";
import { IconBell, IconRight } from "./Icon";

function FeatureButton() {
  return (
    <div>
      <h1>Button</h1>

      <Buttons>
        <PrimaryButton
          size="large"
          outlined="true"
          onClick={() => window.alert("버튼을 만들어보세요")}
        >
          <>
            <LabelWithIcon>
              Large Primary Button <IconRight />
            </LabelWithIcon>
          </>
        </PrimaryButton>
        <PrimaryButton size="medium">Medium</PrimaryButton>
        <PrimaryButton size="small">Small</PrimaryButton>
      </Buttons>

      <Buttons>
        <NegativeButton
          size="large"
          outlined="true"
          onClick={() => console.log(window.prompt("어렵나요?"))}
        >
          <LabelWithIcon>
            Large Negative Button <IconBell />
          </LabelWithIcon>
        </NegativeButton>
        <NegativeButton size="medium">Medium</NegativeButton>
        <NegativeButton size="small">Small</NegativeButton>
      </Buttons>
    </div>
  );
}

const Buttons = styled.div`
  display: flex;
`;

const LabelWithIcon = styled.label`
  margin: 0 auto;
  display: flex;
  gap: 7px;
`;

export default FeatureButton;
