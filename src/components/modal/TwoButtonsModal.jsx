import React from "react";
import { styled } from "styled-components";
import Buttons from "../button/StyledButton";

function TwoButtonsModal({ buttonOneClickHandler }) {
  const confirmButtonHandler = () => {
    console.log("On!");
  };
  return (
    <>
      <ModalBackDiv />
      <ModalDiv>
        <p>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </p>
        <ButtonsDiv>
          <Buttons.NegativeButton onClick={buttonOneClickHandler}>
            닫기
          </Buttons.NegativeButton>
          <Buttons.PrimaryButton onClick={confirmButtonHandler}>
            확인
          </Buttons.PrimaryButton>
        </ButtonsDiv>
      </ModalDiv>
    </>
  );
}

const ModalBackDiv = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`;

const ModalDiv = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 300px;
  position: absolute;
  line-height: 2rem;
`;

const ButtonsDiv = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 3px;
`;

export default TwoButtonsModal;
