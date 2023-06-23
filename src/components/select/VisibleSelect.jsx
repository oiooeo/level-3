import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

function VisibleSelect() {
  const selectList = ["리액트", "자바", "스프링", "리액트네이티브"];

  const [state, setState] = useState("리액트");
  const [list, setList] = useState(false);

  const showList = () => {
    setList(!list);
  };

  const showListHandler = (index) => {
    setState(selectList[index]);
    showList();
  };

  const listRef = useRef(null);

  const portalTarget = document.getElementById("portal-target");

  return (
    <div>
      <SelectButton onClick={showList}>
        {state} <p>▼</p>
      </SelectButton>
      {list &&
        createPortal(
          <List ref={listRef}>
            {selectList.map((item, index) => {
              return (
                <ListItem key={index} onClick={() => showListHandler(index)}>
                  {item}
                </ListItem>
              );
            })}
          </List>,
          portalTarget
        )}
    </div>
  );
}

const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

const List = styled.ul`
  width: 300px;
  margin-top: 10px;
  margin-left: 23px;
  list-style: none;
  position: absolute;
  top: 700px;
`;

const ListItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  background-color: white;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: #deffc1;
  }

  &:first-child {
    border-top: 1px solid lightgrey;
    border-radius: 10px 10px 0 0;
  }

  &:last-child {
    border-bottom: 1px solid lightgrey;
    border-radius: 0 0 10px 10px;
  }
`;

export default VisibleSelect;
