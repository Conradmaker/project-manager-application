import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

export const TodoItemBlock = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  padding-top: 3px;
  padding-bottom: 3px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  border: 1px solid rgb(30, 66, 148);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid rgb(30, 66, 148);
      color: rgb(30, 66, 148);
    `}
`;

export const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  b {
    font-weight: bold;
    font-size: 18px;
  }
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
