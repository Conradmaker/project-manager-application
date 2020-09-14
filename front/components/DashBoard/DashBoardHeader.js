import React from "react";
import styled, { css } from "styled-components";
import { MdPlayArrow } from "react-icons/md";

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
  ${(props) =>
    props.doing &&
    css`
      background: rgb(30, 66, 148);
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
  return (
    <DashBoardHeaderBox>
      <h1>프로젝트이름</h1>
      <Progress doing>
        <li doing>
          <ProgressBtn doing>분석</ProgressBtn>
          <i>
            <MdPlayArrow />
          </i>
        </li>
        <li>
          <ProgressBtn>설계</ProgressBtn>
          <i>
            <MdPlayArrow />
          </i>
        </li>
        <li>
          <ProgressBtn>개발</ProgressBtn>
          <i>
            <MdPlayArrow />
          </i>
        </li>
        <li>
          <ProgressBtn>운영</ProgressBtn>
          <i>
            <MdPlayArrow />
          </i>
        </li>
        <li>
          <ProgressBtn>평가</ProgressBtn>
        </li>
      </Progress>
    </DashBoardHeaderBox>
  );
}
