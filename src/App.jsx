import "./App.css";
import styled from "styled-components";
import FeatureButton from "./components/button/FeatureButton";
import FeatureInput from "./components/input/FeatureInput";

function App() {
  return (
    <div>
      <H1>Button</H1>
      <FeatureButton />
      <H1>Input</H1>
      <FeatureInput />
      <H1>Modal</H1>
      <H1>Select</H1>
    </div>
  );
}

const H1 = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin: 10px;
`;
export default App;
