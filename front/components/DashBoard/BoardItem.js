import React from "react";
import styled, { css } from "styled-components";
import { MdErrorOutline, MdDelete } from "react-icons/md";
import { TodoItemBlock, Text, Remove } from "./TotoItem";
const GenreCircle = styled.div`
  width: 30px;
  height: 30px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: rgb(255, 50, 50);
`;
function BoardItem({ data }) {
  return (
    <TodoItemBlock style={{ height: "30px" }}>
      <GenreCircle>{data.important && <MdErrorOutline />}</GenreCircle>

      <Text>
        {data.title} <b>-{data.username}</b>
      </Text>
      {data.username === "conrad" && (
        <Remove>
          <MdDelete />
        </Remove>
      )}
    </TodoItemBlock>
  );
}

export default BoardItem;

// const data = {
//     title: "안녕하세요",
//     content: "안녕하세요",
//     date: "2020-09-20",
//     genre: "1",
//     username: "conrad",
//   };
