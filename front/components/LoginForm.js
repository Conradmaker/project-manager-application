import React from "react";
import PopForm from "./PopForm";
import styled, { css } from "styled-components";

export const Summary = styled.div`
  flex: 1;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  h1 {
    font-size: 55px;
    font-weight: bold;
    margin-bottom: 40px;
    color: rgb(30, 66, 148);
  }
  h2 {
    font-size: 25px;
    margin-bottom: 10px;
    color: rgb(200, 66, 148);
  }
`;

export const BtnBox = styled.div`
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 24px;
  }
  span {
    color: #fff;
    margin-right: 30px;
  }
`;
export const Btn = styled.button`
  width: 130px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(180, 56, 138);
  outline: none;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 3px 10px black;
    transform: translateY(-2px);
  }
  ${(props) =>
    props.outline &&
    css`
      background: none;
      border: 2px solid #fff;
      color: #fff;
    `};

  & + & {
    margin-top: 30px;
  }
`;
export const Input = styled.input`
  width: 400px;
  height: 50px;
  outline: none;
  border: none;
  margin-bottom: 20px;
  font-size: 20px;
  border-radius: 5px;
`;
export const Form = styled.div`
  flex: 1.3;
  background: #2f303a;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  label {
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
`;

export default function LoginForm() {
  return (
    <>
      <Summary>
        <h1>LogIn</h1>
        <h2>프로젝트를 위한 첫걸음</h2>
        <h2>우리와 함께해줘서 고마워요</h2>
      </Summary>
      <Form>
        <label htmlFor="email">E-MAIL</label>
        <Input name="email" type="text" />{" "}
        <label htmlFor="password">PASSWORD</label>
        <Input type="password" name="password" />
        <BtnBox>
          <div>
            <Btn>로그인</Btn>
          </div>
          <div>
            <span>아직 회원이 아니신가요?</span>
            <Btn outline>회원가입</Btn>
          </div>
        </BtnBox>
      </Form>
    </>
  );
}
