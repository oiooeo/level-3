import React from "react";
import { styled } from "styled-components";

function OverlayClosingModal({ buttonTwoClickHandler }) {
  return (
    <>
      <ModalBackDiv onClick={buttonTwoClickHandler}></ModalBackDiv>
      <ModalDiv>
        <CloseButton onClick={buttonTwoClickHandler}>X</CloseButton>
        <p>
          닫기 버튼 1개가 있고, <br />
          외부 영역을 누르면 모달이 닫혀요.
        </p>
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
  width: 400px;
  height: 200px;
  position: absolute;
  line-height: 2rem;
`;

const CloseButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  float: right;
`;

export default OverlayClosingModal;
