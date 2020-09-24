import React, { useCallback } from "react";
import { FormContainer } from "../PopForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { END_PROJECT_REQUEST } from "../../reducers/manage";

const EndSubmit = styled.div`
  width: 330px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 24px;
    color: black;
    font-weight: bold;
    text-align: center;
    line-height: 1.3;
  }
  div {
    margin-top: 25px;
    display: flex;
    justify-content: space-evenly;
    button {
      width: 80px;
      height: 35px;
      color: #fff;
      margin: 0 10px;
      font-size: 20px;
      cursor: pointer;
      border-radius: 5px;
      outline: none;
      border: none;
    }
  }
`;
export const Message = styled.span`
  padding: 30px 0;
  position: fixed;
  bottom: 10px;
`;
export default function EndForm({ close }) {
  const { projectInfo } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const onEnd = useCallback(() => {
    Router.replace("/");
    dispatch({
      type: END_PROJECT_REQUEST,
      data: { users: projectInfo.Users, projectId: projectInfo.id },
    });
  }, [dispatch]);
  return (
    <FormContainer>
      <EndSubmit>
        <h1>
          정말 프로젝트를 <br />
          종료하시겠습니까?
        </h1>
        <div>
          <button onClick={onEnd} style={{ background: "#aa326f" }}>
            네
          </button>
          <button
            onClick={() => close(false)}
            style={{ background: "rgb(30, 66, 148)" }}
          >
            아뇨
          </button>
        </div>
      </EndSubmit>
      <Message onClick={() => close(false)}>
        이곳을 누르면 창이 닫힙니다.
      </Message>
    </FormContainer>
  );
}
