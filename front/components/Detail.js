import React from "react";
import styled, { keyframes } from "styled-components";
import { CloseBtn } from "./PopForm";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import {} from "./PopForm";

export const slide = keyframes`
from{
    transform:translateX(2000px);
}
to{
    transform:translateX(0);
}
`;

export const DetailBox = styled.div`
  width: 40%;
  min-height: 500px;
  max-height: 90%;
  background: #fff;
  padding: 30px 40px;
  box-sizing: border-box;

  box-shadow: 0 0 30px #2f303a;
  overflow-y: scroll;
  h1 {
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 15px;
    font-size: 22px;
  }
  span {
    display: inline-block;
    line-height: 1.5;
    font-size: 19px;
    padding: 20px 0;
    border-bottom: 1px solid #e5e5e5;
  }
  b {
    font-weight: bold;
  }
`;

const DetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  z-index: 13;
  button {
    color: black;
    font-size: 25px;
    right: 50px;
  }

  animation: ${slide} 0.6s ease;
`;

export default function Detail({ close, data }) {
  const { leader } = data.Project;
  return (
    <DetailContainer>
      <CloseBtn white onClick={() => close(false)}>
        닫기
      </CloseBtn>
      <DetailBox>
        <h1>
          프로젝트명: <b>{data.Project.name}</b>
        </h1>
        <h2>
          희망인원: <b>{data.Project.number}</b>
        </h2>
        <h2>게시일:{data.createdAt}</h2>
        <span>{data.content}</span>
        <CommentForm id={data.ProjectId} />
        {data.EComments.map((item) => (
          <CommentItem data={item} leader={leader} />
        ))}
      </DetailBox>
    </DetailContainer>
  );
}
