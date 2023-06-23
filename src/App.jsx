import "./App.css";
import styled from "styled-components";
import FeatureButton from "./components/button/FeatureButton";
import FeatureInput from "./components/input/FeatureInput";
import FeatureSelect from "./components/select/FeatureSelect";
import FeatureModal from "./components/modal/FeatureModal";

function App() {
  return (
    <>
      <FeatureButton />
      <FeatureInput />
      <FeatureModal />
      <SelectDiv>
        <FeatureSelect />
      </SelectDiv>
    </>
  );
}

const SelectDiv = styled.div`
  height: 200px;
  border: 3px solid rgb(221, 221, 221);
  position: relative;
  overflow: hidden;
  margin: 10px;
  margin-top: 50px;
`;
export default App;
