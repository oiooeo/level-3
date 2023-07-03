import React, { useState } from "react";
import Buttons from "../button/StyledButton";
import OverlayClosingModal from "./OverlayClosingModal";
import TwoButtonsModal from "./TwoButtonsModal";
import { P } from "../../shared/GlobalStyle";

function FeatureModal() {
  const [twoButtonsModal, setTwoButtonsModal] = useState(false);
  const [overlayClosingModal, setOverlayClosingModal] = useState(false);

  const buttonOneClickHandler = () => {
    setTwoButtonsModal(!twoButtonsModal);
  };

  const buttonTwoClickHandler = () => {
    setOverlayClosingModal(!overlayClosingModal);
  };

  return (
    <>
      <P>Modal</P>
      <Buttons.NegativeButton
        size="medium"
        outlined="true"
        onClick={buttonOneClickHandler}
      >
        open modal 1️⃣
      </Buttons.NegativeButton>
      <Buttons.PrimaryButton size="large" onClick={buttonTwoClickHandler}>
        open modal 2️⃣
      </Buttons.PrimaryButton>
      {twoButtonsModal && (
        <>
          <TwoButtonsModal buttonOneClickHandler={buttonOneClickHandler} />
        </>
      )}
      {overlayClosingModal && (
        <>
          <OverlayClosingModal buttonTwoClickHandler={buttonTwoClickHandler} />
        </>
      )}
    </>
  );
}

export default FeatureModal;
