import "./App.css";
import styled from "styled-components";
import FeatureButton from "./components/button/FeatureButton";
import FeatureInput from "./components/input/FeatureInput";
import FeatureSelect from "./components/select/FeatureSelect";
import FeatureModal from "./components/modal/FeatureModal";

function App() {
  return (
    <>
      <H1>Button</H1>
      <FeatureButton />
      <H1>Input</H1>
      <FeatureInput />
      <H1>Modal</H1>
      <FeatureModal />
      <SelectDiv>
        <H1>Select</H1>
        <FeatureSelect />
      </SelectDiv>
    </>
  );
}

const H1 = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin: 10px;
  margin-top: 30px;
`;

const SelectDiv = styled.div`
  height: 200px;
  border: 3px solid rgb(221, 221, 221);
  overflow: hidden;
  position: relative;
  margin: 10px;
  margin-top: 50px;
`;
export default App;
