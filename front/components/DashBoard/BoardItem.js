import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { MdErrorOutline, MdDelete } from "react-icons/md";
import { TodoItemBlock, Text, Remove } from "./TotoItem";
import BoardInfo from "./BoardInfo";

const Title = styled(Text)`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
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
const ContentInfo = styled.div`
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s;
  ${(props) =>
    props.open &&
    css`
      height: 130px;
      overflow-y: scroll;
      opacity: 1;
    `}
`;
function BoardItem({ data }) {
  const [open, setOpen] = useState(false);
  const onChangeOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <TodoItemBlock style={{ height: "30px" }}>
        <GenreCircle>{data.important && <MdErrorOutline />}</GenreCircle>

        <Title onClick={onChangeOpen}>
          {data.title} <b>-{data.username}</b>
        </Title>
        {data.username === "conrad" && (
          <Remove>
            <MdDelete />
          </Remove>
        )}
      </TodoItemBlock>
      <ContentInfo open={open}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting,
      </ContentInfo>
    </>
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
