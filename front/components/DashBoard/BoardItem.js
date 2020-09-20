import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { MdErrorOutline, MdDelete } from "react-icons/md";
import { TodoItemBlock, Text, Remove } from "./TotoItem";
import { useSelector } from "react-redux";

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
  console.log(data);
  const { me } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const onChangeOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <TodoItemBlock style={{ height: "30px" }}>
        <GenreCircle>{!data.kind && <MdErrorOutline />}</GenreCircle>

        <Title onClick={onChangeOpen}>
          {data.title} <b>-{data.User.nickname}</b>
        </Title>
        {data.User.id === me.id && (
          <Remove>
            <MdDelete />
          </Remove>
        )}
      </TodoItemBlock>
      <ContentInfo open={open}>{data.content}</ContentInfo>
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
