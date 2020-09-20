import React, { useState } from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem";
import { TodoListBlock } from "./TodoList";
import { AddBtn } from "./Calender";
import PopForm from "../PopForm";
import { useSelector } from "react-redux";

export const BoardTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: rgb(30, 66, 148);
  margin-bottom: 10px;
`;
const DashBBoard = styled.div`
  grid-column: 1/4;
  grid-row: 1/6;
  border-right: 1px solid rgb(30, 66, 148);
  padding: 10px 20px;
  position: relative;
`;
const data2 = {
  title: "안녕하세요",
  content: "안녕하세요",
  date: "2020-09-20",
  important: true,
  username: "conrad",
};
export default function Board({ data }) {
  const { PBoards } = useSelector((state) => state.project.projectInfo);
  const [addopen, setAddopen] = useState(false);
  return (
    <DashBBoard>
      <BoardTitle>게시판</BoardTitle>
      <TodoListBlock>
        {PBoards.map((item) => (
          <BoardItem key={item.id} data={item} />
        ))}
      </TodoListBlock>
      <AddBtn onClick={() => setAddopen(true)}>Add</AddBtn>
      {addopen && <PopForm header="board" close={setAddopen} id={data.id} />}
    </DashBBoard>
  );
}
