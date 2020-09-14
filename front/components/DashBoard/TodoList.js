import React, { useState } from "react";
import styled from "styled-components";
import { BoardTitle } from "./Board";
import TodoItem from "./TotoItem";
import { AddBtn } from "./Calender";
import PopForm from "../PopForm";
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
  const [addopen, setAddopen] = useState(false);
  return (
    <DashBTodo>
      <BoardTitle>오늘의 할일</BoardTitle>
      <TodoListBlock>
        <TodoItem text="프로젝트 생성하기" done={true} />
        <TodoItem text="컴포넌트 스타일링 하기" done={true} />
        <TodoItem text="Context 만들기" done={false} />
        <TodoItem text="기능 구현하기" done={false} />
        <TodoItem text="프로젝트 생성하기" done={true} />
        <TodoItem text="컴포넌트 스타일링 하기" done={true} />
        <TodoItem text="Context 만들기" done={false} />
        <TodoItem text="기능 구현하기" done={false} />
      </TodoListBlock>
      <AddBtn onClick={() => setAddopen(true)}>Add</AddBtn>
      {addopen && <PopForm header="todo" close={setAddopen} />}
    </DashBTodo>
  );
}
