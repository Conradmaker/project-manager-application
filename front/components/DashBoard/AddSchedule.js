import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { ADD_SCHEDULE_REQUEST } from "../../reducers/manage";
import { Btn, BtnBox, Form, Input, Summary } from "../LoginForm";

export default function SignupForm({ close }) {
  const dispatch = useDispatch();
  const { projectInfo } = useSelector((state) => state.project);
  const [title, onChangeTitle] = useInput("");
  const [start, onChangeStart] = useInput("");
  const [end, onChangeEnd] = useInput("");
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ADD_SCHEDULE_REQUEST,
        data: {
          title,
          start: new Date(start),
          end: new Date(end),
          projectId: projectInfo.id,
        },
      });
    },
    [projectInfo, title, start, end]
  );
  return (
    <>
      <Summary>
        <h3>일정등록</h3>
      </Summary>
      <Form onSubmit={onSubmit}>
        <label htmlFor="title">타이틀</label>
        <Input
          name="title"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <label htmlFor="start">시작일</label>
        <Input
          type="date"
          name="start"
          value={start}
          onChange={onChangeStart}
        />
        <label htmlFor="end">종료일</label>
        <Input type="date" name="end" value={end} onChange={onChangeEnd} />
        <BtnBox>
          <div>
            <span>일정을 등록할까요?</span>
            <Btn type="submit">등록</Btn>
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
