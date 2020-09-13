import React from "react";
import styled, { keyframes } from "styled-components";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const fade = keyframes`
from{
  opacity:0;
}
to{
  opacity:1;
}
`;
const slide = keyframes`
from{
  transform: translateY(1000px)
}
to{
  transform: translateY(0px)
}
`;

const FormBox = styled.div`
  width: 70%;
  height: 80%;
  background: #fff;
  display: flex;

  animation: ${slide} 0.3s ease-in;
`;

const FormContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;

  background-color: rgba(0, 0, 0, 0.75);
  animation: ${fade} 0.3s ease-in;
`;

export const CloseBtn = styled.button`
  font-size: 50px;
  color: white;

  position: absolute;
  top: 20px;
  right: 20px;

  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default function PopForm({ close, header, children }) {
  return (
    <FormContainer>
      <FormBox>
        {header === "login" ? (
          <LoginForm>{children}</LoginForm>
        ) : (
          <SignupForm>{children}</SignupForm>
        )}
      </FormBox>
      <CloseBtn onClick={() => close(false)}>X</CloseBtn>
    </FormContainer>
  );
}
