import React from "react";
import { Btn, BtnBox, Form, Input, Summary } from "../LoginForm";

export default function SignupForm({ close }) {
  return (
    <>
      <Summary>
        <h3>일정등록</h3>
      </Summary>
      <Form>
        <label htmlFor="title">타이틀</label>
        <Input name="title" type="text" />
        <label htmlFor="start">시작일</label>
        <Input type="date" name="start" />
        <label htmlFor="end">종료일</label>
        <Input type="date" name="end" />
        <BtnBox>
          <div>
            <span>일정을 등록할까요?</span>
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
