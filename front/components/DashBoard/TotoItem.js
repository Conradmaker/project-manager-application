import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import {
  REMOVE_TODO_REQUEST,
  TOGGLE_TODO_REQUEST,
} from "../../reducers/manage";
import { useDispatch } from "react-redux";

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

function TodoItem({ data }) {
  const dispatch = useDispatch();
  const onRemove = useCallback(() => {
    dispatch({ type: REMOVE_TODO_REQUEST, data: data.id });
  }, [dispatch]);
  const onToggle = useCallback(() => {
    dispatch({ type: TOGGLE_TODO_REQUEST, data: data.id });
  }, [dispatch]);
  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggle} done={data.done}>
        {data.done && <MdDone />}
      </CheckCircle>
      <Text done={data.done}>{data.content}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
