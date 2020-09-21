import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { ADD_TODO_REQUEST } from "../../reducers/manage";
import { Btn, BtnBox, Form, Input, Summary } from "../LoginForm";

export default function SignupForm({ close }) {
  const { projectInfo } = useSelector((state) => state.project);
  const { addTodoDone } = useSelector((state) => state.manage);
  const dispatch = useDispatch();
  const [title, onChangeTitle] = useInput("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ADD_TODO_REQUEST,
        data: { title, projectId: projectInfo.id },
      });
      close(false);
    },
    [dispatch, title, projectInfo]
  );

  return (
    <>
      <Summary>
        <h3>할일추가</h3>
      </Summary>
      <Form onSubmit={onSubmit}>
        <label htmlFor="title">할일</label>
        <Input
          name="title"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
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
