import React from "react";
import { Btn, BtnBox, Form, Input, Summary } from "../LoginForm";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 99%;
  height: 100px;
  font-size: 17px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
export default function SignupForm({ close }) {
  return (
    <>
      <Summary>
        <h3>글작성</h3>
      </Summary>
      <Form>
        <label htmlFor="title">제목</label>
        <Input name="title" type="text" />
        <label htmlFor="content">내용</label>
        <TextArea type="text" name="content" />
        <label htmlFor="genre">종류</label>
        <div>
          <input type="radio" name="genre" id="normalitem" value={false} />
          <label htmlFor="normalitem">일반글</label>
          <input type="radio" name="notiitem" value={true} />
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
