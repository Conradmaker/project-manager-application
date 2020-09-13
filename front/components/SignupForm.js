import React from "react";
import { Btn, BtnBox, Form, Input, Summary } from "./LoginForm";

export default function SignupForm() {
  return (
    <>
      <Summary>
        <h1>SignUp</h1>
        <h2>프로젝트를 위한 첫걸음</h2>
        <h2>저희와 함께 하시겠습니까?</h2>
      </Summary>
      <Form>
        <label htmlFor="email">E-MAIL</label>
        <Input name="email" type="text" />
        <label htmlFor="nickname">NICKNAME</label>
        <Input type="text" name="nickname" />
        <label htmlFor="password">PASSWORD</label>
        <Input type="password" name="password" />
        <label htmlFor="password-check">PASSWORD-CHECK</label>
        <Input type="password" name="password-check" />
        <BtnBox>
          <div>
            <Btn>회원가입</Btn>
          </div>
          <div>
            <span>이미 회원이신가요?</span>
            <Btn outline>로그인</Btn>
          </div>
        </BtnBox>
      </Form>
    </>
  );
}
