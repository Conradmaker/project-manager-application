import React from "react";
import { Btn, BtnBox, Form, Input, Summary } from "../LoginForm";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { ADD_PBOARD_REQUEST } from "../../reducers/manage";

const TextArea = styled.textarea`
  width: 99%;
  height: 100px;
  font-size: 17px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
export default function SignupForm({ close, id }) {
  const [title, onChangeTitle] = useInput("");
  const [content, onChangeContent] = useInput("");
  const [genre, onChangeGenre] = useInput(2);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_PBOARD_REQUEST,
      data: { ProjectId: id, title, content, genre },
    });
    close(false);
  };
  return (
    <>
      <Summary>
        <h3>글작성</h3>
      </Summary>
      <Form onSubmit={onSubmit}>
        <label htmlFor="title">제목</label>
        <Input
          name="title"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <label htmlFor="content">내용</label>
        <TextArea
          type="text"
          name="content"
          value={content}
          onChange={onChangeContent}
        />
        <label htmlFor="genre">종류</label>
        <div>
          <input
            type="radio"
            name="genre"
            id="normalitem"
            value={1}
            onChange={onChangeGenre}
          />
          <label htmlFor="normalitem">일반글</label>
          <input type="radio" name="genre" value={0} onChange={onChangeGenre} />
          <label htmlFor="notiitem">공지글</label>
        </div>
        <BtnBox>
          <div>
            <span>게시글을 등록할까요?</span>
            <Btn>등록</Btn>
          </div>
          <div>
            <Btn outline onClick={() => close(false)}>
              취소
            </Btn>
          </div>
        </BtnBox>
      </Form>
    </>
  );
}
