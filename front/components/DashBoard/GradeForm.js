import React, { useState } from "react";
import { FormContainer } from "../PopForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Message } from "./EndForm";

const EndSubmit = styled.form`
  padding: 30px 0;
  width: 330px;
  height: auto;
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
const InputSet = styled.div`
  label {
    color: black;
    b {
      font-weight: bold;
    }
  }
  input {
  }
`;
const initialState = [];
function GradeInput({ v, i }) {
  const [inputs, setInputs] = useState(initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs(
      (initialState[i] = {
        [name]: value,
      })
    );
  };
  return (
    <InputSet>
      <label>
        <b>{v.nickname}</b>님의 점수
      </label>
      <input
        type="number"
        name={v.id}
        value={inputs[v.id]}
        min="0"
        max="100"
        step="10"
        onChange={onChange}
      />
    </InputSet>
  );
}
export default function GradeForm({ close }) {
  const { Users } = useSelector((state) => state.project.projectInfo);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(initialState);
  };
  return (
    <FormContainer>
      <EndSubmit onSubmit={onSubmit}>
        <h1>팀원 평가</h1>
        {Users.map((v, i) => (
          <GradeInput v={v} key={v.id} i={i} />
        ))}
        <div>
          <button type="submit" style={{ background: "rgb(30, 66, 148)" }}>
            저장
          </button>
        </div>
      </EndSubmit>
      <Message onClick={() => close(false)}>
        이곳을 누르면 창이 닫힙니다.
      </Message>
    </FormContainer>
  );
}
