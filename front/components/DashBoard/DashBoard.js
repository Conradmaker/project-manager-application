import React from "react";
import styled, { css } from "styled-components";
import DashBoardHeader from "./DashBoardHeader";
import Calender from "./Calender";
import TodoList from "./TodoList";
import Board from "./Board";
const DashBoardBox = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ContentBox = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;
export default function DashBoard() {
  return (
    <DashBoardBox>
      <DashBoardHeader />
      <ContentBox>
        <Board />
        <TodoList />
        <Calender />
      </ContentBox>
    </DashBoardBox>
  );
}
