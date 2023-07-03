import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addInput } from "../../redux/modules/input";
import Buttons from "../button/StyledButton";
import { P } from "../../shared/GlobalStyle";

const FeatureInput = () => {
  const [tag, setTag] = useState({
    name: "",
    price: "",
  });

  const dispatch = useDispatch();

  const setValue = (event) => {
    event.target.value = event.target.value
      .split(",")
      .reduce((curr, acc) => curr + acc, "");
    const { name, value } = event.target;
    setTag({ ...tag, [name]: value });
  };

  const clickAddButtonHandler = (event) => {
    event.preventDefault();
    dispatch(
      addInput({
        ...tag,
      })
    );
    window.alert(`{name: ${tag.name}, price: ${tag.price}}`);
  };

  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const unComma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(unComma(str));
  };

  return (
    <>
      <P>Input</P>
      <Form onSubmit={clickAddButtonHandler}>
        <InputGroup>
          <b>이름</b> &nbsp;
          <Input name="name" value={tag.name} onChange={setValue} required />
          <b>가격</b> &nbsp;
          <Input
            name="price"
            value={inputPriceFormat(tag.price)}
            onChange={setValue}
            placeholder="0"
            required
          />
        </InputGroup>
        <Buttons.PrimaryButton>저장</Buttons.PrimaryButton>
      </Form>
    </>
  );
};

const Form = styled.form`
  align-items: center;
  display: flex;
  background-color: #e6e6e6;
  border-radius: 10px;
  padding: 20px;
  margin-left: 10px;
  width: fit-content;
`;

const InputGroup = styled.div`
  align-items: center;
  display: flex;
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  margin-right: 20px;
  margin-left: 10px;
`;

export default FeatureInput;
