import React from "react";
import styled, { keyframes } from "styled-components";
import { CloseBtn } from "./PopForm";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const slide = keyframes`
from{
    transform:translateX(2000px);
}
to{
    transform:translateX(0);
}
`;

const DetailBox = styled.div`
  width: 40%;
  max-height: 90%;
  background: #fff;
  padding: 30px 40px;
  box-sizing: border-box;

  box-shadow: 0 0 30px #2f303a;
  overflow: scroll;
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
  background: rgba(30, 66, 148, 1);
  z-index: 13;
  button {
    color: black;
    font-size: 25px;
    right: 50px;
  }

  animation: ${slide} 0.6s ease;
`;

export default function Detail({ close }) {
  return (
    <DetailContainer>
      <CloseBtn white={true} onClick={() => close(false)}>
        닫기
      </CloseBtn>
      <DetailBox>
        <h1>
          프로젝트명: <b>디비디 바비디 부</b>
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
          including versions of Lorem Ipsum.
        </span>
        <CommentForm />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </DetailBox>
    </DetailContainer>
  );
}
