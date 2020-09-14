import React from "react";
import styled from "styled-components";
import { CloseBtn } from "../PopForm";
import CommentForm from "../CommentForm";
import CommentItem from "../CommentItem";
import DetailBox, { slide } from "../Detail";

const Container = styled.div`
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

export default function BoardInfo({ close }) {
  return (
    <Container>
      <CloseBtn white={true} onClick={() => close(false)}>
        닫기
      </CloseBtn>
      <DetailBox>
        <h1>
          제목: <b>디비디asdasd</b>
        </h1>
        <h2>
          등록자: <b>conrad</b>
        </h2>
        <h2>게시일:2020.09.13</h2>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
        </span>
        <CommentForm />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </DetailBox>
    </Container>
  );
}
