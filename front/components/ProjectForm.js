import React from "react";
import { Btn, BtnBox, Form, Input, Summary } from "./LoginForm";
import styled from "styled-components";

const Textarea = styled.textarea`
  width: 400px;
  height: 200px;
  font-size: 18px;
`;
export default function ProjectForm({ close }) {
  return (
    <>
      <Summary>
        <h1>Project</h1>
        <h2>프로젝트를 위한 열정!</h2>
        <h2>당신의 여정을 응원합니다.</h2>
      </Summary>
      <Form>
        <label htmlFor="name">프로젝트명</label>
        <Input name="name" type="text" />
        <label htmlFor="genre">종류</label>
        <div style={{ marginBottom: "10px" }}>
          <input type="radio" name="genre" />
          <label htmlFor="grad" value="취업">
            취업용
          </label>
          <input type="radio" name="genre" value="사이드" />
          <label htmlFor="grad">사이드</label>
          <input type="radio" name="genre" value="토이" />
          <label htmlFor="grad">토이</label>
          <input type="radio" name="genre" value="스타트업" />
          <label htmlFor="grad">스타트업</label>
          <input type="radio" name="genre" value="기업용" />
          <label htmlFor="grad">기업용</label>
        </div>

        <label htmlFor="number">희망인원</label>
        <Input type="number" name="number" />
        <label htmlFor="info">프로젝트 설명</label>
        <Textarea type="text" name="info" />
        <BtnBox>
          <div>
            <Btn>등록</Btn>
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
