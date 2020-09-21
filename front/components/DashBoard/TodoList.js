import React, { useState } from "react";
import styled from "styled-components";
import { BoardTitle } from "./Board";
import TodoItem from "./TotoItem";
import { AddBtn } from "./Calender";
import PopForm from "../PopForm";
import { useSelector } from "react-redux";
export const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 0;
  padding-bottom: 48px;
  overflow-y: scroll;
  height: 140px;
`;
const DashBTodo = styled.div`
  grid-column: 4/7;
  grid-row: 1/6;
  padding: 10px 20px;
  position: relative;
`;
export default function TodoList() {
  const { Todos } = useSelector((state) => state.project.projectInfo);
  const [addopen, setAddopen] = useState(false);
  return (
    <DashBTodo>
      <BoardTitle>오늘의 할일</BoardTitle>
      <TodoListBlock>
        {Todos.map((v) => (
          <TodoItem key={v.id} data={v} />
        ))}
      </TodoListBlock>
      <AddBtn onClick={() => setAddopen(true)}>Add</AddBtn>
      {addopen && <PopForm header="todo" close={setAddopen} />}
    </DashBTodo>
  );
}
