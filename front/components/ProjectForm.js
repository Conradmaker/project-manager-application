import React, { useCallback, useEffect, useState } from "react";
import { Btn, BtnBox, Form, Input, Summary } from "./LoginForm";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_PROJECT_REQUEST } from "../reducers/project";

const Textarea = styled.textarea`
  width: 400px;
  height: 200px;
  font-size: 18px;
`;
const RadioLabel = styled.label`
  font-size: 15px !important;
`;
export default function ProjectForm({ close }) {
  const dispatch = useDispatch();
  const { createProjectDone, createProjectError } = useSelector(
    (state) => state.project
  );
  const [name, onChangeName] = useInput("");
  const [number, onChangeNumber] = useInput(1);
  const [content, onChangeContent] = useInput("");
  const [genre, onChangeGenre] = useInput(false);
  const onSubmit = (e) => {
    e.preventDefault();
    return dispatch({
      type: CREATE_PROJECT_REQUEST,
      data: { name, kind: genre, number, content },
    });
  };
  useEffect(() => {
    if (createProjectDone) {
      return close(false);
    }
    if (createProjectError) {
      return alert(createProjectError);
    }
  }, [createProjectDone, createProjectError]);
  return (
    <>
      <Summary>
        <h1>Project</h1>
        <h2>프로젝트를 위한 열정!</h2>
        <h2>당신의 여정을 응원합니다.</h2>
      </Summary>
      <Form onSubmit={onSubmit}>
        <label htmlFor="name">프로젝트명</label>
        <Input name="name" type="text" value={name} onChange={onChangeName} />
        <label htmlFor="genre">종류</label>
        <div style={{ marginBottom: "10px" }}>
          <RadioLabel htmlFor="port">
            <input
              type="radio"
              id="port"
              name="genre"
              value="1"
              onChange={onChangeGenre}
            />{" "}
            취업용
          </RadioLabel>
          <RadioLabel htmlFor="side">
            <input
              type="radio"
              id="side"
              name="genre"
              value="2"
              onChange={onChangeGenre}
            />
            사이드
          </RadioLabel>
          <RadioLabel htmlFor="toy">
            <input
              type="radio"
              id="toy"
              name="genre"
              value="3"
              onChange={onChangeGenre}
            />
            토이
          </RadioLabel>
          <RadioLabel htmlFor="startup">
            <input
              type="radio"
              id="startup"
              name="genre"
              value="4"
              onChange={onChangeGenre}
            />
            스타트업
          </RadioLabel>
          <RadioLabel htmlFor="enterprise">
            <input
              type="radio"
              id="enterprise"
              name="genre"
              value="5"
              onChange={onChangeGenre}
            />
            기업용
          </RadioLabel>
        </div>

        <label htmlFor="number">희망인원</label>
        <Input
          type="number"
          name="number"
          min="1"
          value={number}
          onChange={onChangeNumber}
        />

        <label htmlFor="content">프로젝트 설명</label>
        <Textarea
          type="text"
          name="content"
          value={content}
          onChange={onChangeContent}
          placeholder="해쉬태그를 함께 적으면 사람들이 더 빨리 찾아요! (ex. #리액트 #노드js)"
        />
        <BtnBox>
          <div>
            <Btn type="submit">등록</Btn>
          </div>
          <div>
            <span>좀더 생각해보시겠어요??</span>
            <Btn outline onClick={() => close(false)}>
              취소
            </Btn>
          </div>
        </BtnBox>
      </Form>
    </>
  );
}
