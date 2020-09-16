import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { ADD_COMMENT_REQUEST } from "../reducers/project";
import { Btn, Input } from "./LoginForm";
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

export default function CommentForm({ id }) {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [content, onChange] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_COMMENT_REQUEST, data: { content, id } });
  };
  return (
    <>
      {!me ? null : me.ProjectId ? (
        <CommentBox>
          <textarea
            type="text"
            disabled
            placeholder="이미 진행중인 프로젝트가 있습니다."
          ></textarea>
        </CommentBox>
      ) : (
        <CommentBox onSubmit={onSubmit}>
          <textarea
            name="comment"
            value={content}
            onChange={onChange}
          ></textarea>
          <IntoBtn type="submit">신청</IntoBtn>
        </CommentBox>
      )}
    </>
  );
}
