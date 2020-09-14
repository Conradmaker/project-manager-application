import React from "react";
import { Btn, BtnBox, Form, Input, Summary } from "../LoginForm";

export default function SignupForm({ close }) {
  return (
    <>
      <Summary>
        <h3>할일추가</h3>
      </Summary>
      <Form>
        <label htmlFor="title">할일</label>
        <Input name="title" type="text" />
        <BtnBox>
          <div>
            <span>오늘할일을 등록할까요?</span>
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
