import React, { useCallback, useEffect, useState } from "react";
import { Btn, BtnBox, Form, Input, Summary } from "./LoginForm";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";
import Router from "next/router";

export default function SignupForm({ close }) {
  const dispatch = useDispatch();
  const { signUpDone, signUpError } = useSelector((state) => state.user);
  const [email, emailChange] = useInput("");
  const [position, positionChange] = useInput("");
  const [password, passwordChange] = useInput("");
  const [nickname, nicknameChange] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [checkError, setCheckError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setCheckError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setCheckError(true);
      }
      return dispatch({
        type: SIGN_UP_REQUEST,
        data: { email, nickname, password, position },
      });
    },
    [email, position, password, nickname, passwordCheck]
  );
  useEffect(() => {
    signUpDone && Router.push("/");
    signUpError && alert(signUpError);
  }, [signUpDone, signUpError]);
  return (
    <>
      <Summary>
        <h1>SignUp</h1>
        <h2>프로젝트를 위한 첫걸음</h2>
        <h2>저희와 함께 하시겠습니까?</h2>
      </Summary>
      <Form onSubmit={onSubmit}>
        <label htmlFor="email">E-MAIL</label>
        <Input name="email" type="email" value={email} onChange={emailChange} />
        <label htmlFor="nickname">NICKNAME</label>
        <Input
          type="text"
          name="nickname"
          value={nickname}
          onChange={nicknameChange}
        />
        <label htmlFor="position">POSITION</label>
        <Input
          type="text"
          name="position"
          placeholder="ex. front-end Developer"
          value={position}
          onChange={positionChange}
        />
        <label htmlFor="password">PASSWORD</label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={passwordChange}
        />
        <label htmlFor="password-check">PASSWORD-CHECK</label>
        <Input
          type="password"
          name="password-check"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
        <BtnBox>
          <div>
            {checkError && (
              <span style={{ color: "red" }}>비밀번호가 다릅니다.</span>
            )}
            <Btn type="submit">회원가입</Btn>
          </div>
          <div>
            <span>이미 회원이신가요?</span>
            <Btn outline onClick={() => close(false)}>
              닫기
            </Btn>
          </div>
        </BtnBox>
      </Form>
    </>
  );
}
