import React, { useCallback, useEffect, useRef, useState } from "react";
import { Btn, BtnBox, Form, Input, Summary } from "./LoginForm";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_PROJECT_REQUEST,
  UPLOAD_IMAGES_REQUEST,
} from "../reducers/project";
import IMG from "../assets/img/logo.png";

const Textarea = styled.textarea`
  width: 400px;
  height: 200px;
  font-size: 18px;
`;
const RadioLabel = styled.label`
  font-size: 15px !important;
`;
const Image = styled.img`
  max-width: 500px;
  max-height: 50%;
  border: 1px solid gray;
  align-self: center;
`;
export default function ProjectForm({ close }) {
  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = useCallback((e) => {
    console.log("images", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  });
  const dispatch = useDispatch();
  const { createProjectDone, createProjectError, image } = useSelector(
    (state) => state.project
  );
  const [name, onChangeName] = useInput("");
  const [number, onChangeNumber] = useInput(1);
  const [content, onChangeContent] = useInput("");
  const [genre, onChangeGenre] = useInput(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    image.forEach((v) => {
      fd.append("image", v);
    });
    fd.append("name", name);
    fd.append("kind", genre);
    fd.append("number", number);
    fd.append("content", content);
    return dispatch({
      type: CREATE_PROJECT_REQUEST,
      data: fd,
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
        <span>미리보기</span>
        {image.map((v) => (
          <Image
            src={`http://localhost:3030/${v}`}
            width="100%"
            alter={v}
          ></Image>
        ))}
      </Summary>
      <Form onSubmit={onSubmit} encType="multipart/form-data">
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
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <button type="button" onClick={onClickImageUpload}>
          이미지 업로드
        </button>
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
