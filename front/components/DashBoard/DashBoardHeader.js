import React, { useCallback } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdPlayArrow } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PROGRESS_REQUEST } from "../../reducers/manage";
const bling = keyframes`
from{
  box-shadow:0 0 10px white;
}
to{
  box-shadow:0 0 20px rgb(30, 66, 148) ;
}
`;
const ProgressBtn = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 3px;
  border-radius: 50%;
  background: #7599ae;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  ${(props) =>
    props.doing &&
    css`
      background: rgb(30, 66, 148);
      animation: ${bling} 0.5s ease alternate infinite;
    `}
`;
const Progress = styled.ul`
  display: flex;
  align-items: center;
  li {
    display: flex;
    align-items: center;
    i {
      color: rgb(30, 66, 148);
      font-size: 24px;
    }
  }
`;
const DashBoardHeaderBox = styled.div`
  margin: 5px 0 25px 0;
  display: flex;
  align-items: center;
  h1 {
    flex: 1;
    font-size: 35px;
    font-weight: bold;
  }
`;
export default function DashBoardHeader() {
  const dispatch = useDispatch();
  const { projectInfo } = useSelector((state) => state.project);
  const onchangeProgress = useCallback(
    (value) => {
      dispatch({
        type: CHANGE_PROGRESS_REQUEST,
        data: { progress: value, projectId: projectInfo.id },
      });
    },
    [dispatch, projectInfo]
  );
  return (
    <DashBoardHeaderBox>
      <h1>프로젝트이름</h1>
      <Progress>
        <li>
          <ProgressBtn
            doing={projectInfo.progress === 0}
            onClick={() => onchangeProgress(0)}
          >
            분석
          </ProgressBtn>
          <i>
            <MdPlayArrow />
          </i>
        </li>
        <li>
          <ProgressBtn
            doing={projectInfo.progress === 1}
            onClick={() => onchangeProgress(1)}
          >
            설계
          </ProgressBtn>
          <i>
            <MdPlayArrow />
          </i>
        </li>
        <li>
          <ProgressBtn
            doing={projectInfo.progress === 2}
            onClick={() => onchangeProgress(2)}
          >
            개발
          </ProgressBtn>
          <i>
            <MdPlayArrow />
          </i>
        </li>
        <li>
          <ProgressBtn
            doing={projectInfo.progress === 3}
            onClick={() => onchangeProgress(3)}
          >
            운영
          </ProgressBtn>
          <i>
            <MdPlayArrow />
          </i>
        </li>
        <li>
          <ProgressBtn
            doing={projectInfo.progress === 4}
            onClick={() => onchangeProgress(4)}
          >
            평가
          </ProgressBtn>
        </li>
      </Progress>
    </DashBoardHeaderBox>
  );
}
