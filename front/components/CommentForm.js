import React from "react";
import styled from "styled-components";
import { Btn } from "./LoginForm";
const IntoBtn = styled(Btn)`
  cursor: pointer;
  width: 100%;
  background: #1e4294;
  color: rgb(255, 255, 255) !important;
`;
const CommentBox = styled.form`
  margin-top: 10px;
  textarea {
    border: 2px solid gray;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    font-size: 18px;
  }
`;

export default function CommentForm() {
  return (
    <CommentBox>
      <textarea name=""></textarea>
      <IntoBtn>신청</IntoBtn>
    </CommentBox>
  );
}
