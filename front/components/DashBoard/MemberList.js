import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { REMOVE_MEMBER_REQUEST } from "../../reducers/manage";
import { BiError, BiUserVoice } from "react-icons/bi";
import EndForm from "./EndForm";
import GradeForm from "./GradeForm";

const MemberLists = styled.ul`
  margin-top: 20px;
  li {
    width: 100%;
    height: 50px;
    background: #fff;
    margin: 10px 0;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    a {
      span {
        font-size: 20px;
        color: black;
      }
    }
    p {
      flex: 1;
      text-align: end;
      align-self: center;
      font-size: 15px;
      color: #2f303a;
    }
    button {
      width: 50px;
      height: 60%;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      outline: none;
      background: #aa326f;
      margin-left: 20px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background: #a8292e;
      }
    }
  }
`;
const MemberBox = styled.div`
  color: white;
  min-width: 350px;
  height: 100%;
  background: rgb(30, 66, 148);
  border: 1.5px solid rgb(30, 66, 148);
  padding: 40px 10px;
  box-sizing: border-box;
  position: relative;
  h1 {
    font-size: 30px;
  }
`;
const EndBtn = styled.button`
  width: 90px;
  height: 35px;
  background: #aa326f;
  font-size: 19px;
  color: #fff;
  position: absolute;
  bottom: 20px;
  right: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: red;
    box-shadow: 0 0 10px red;
  }
`;

export default function MemberList({ data }) {
  const [endOpen, setEndOpen] = useState(false);
  const [gradeOpen, setGradeOpen] = useState(false);
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const onExile = useCallback(
    (id) => {
      dispatch({ type: REMOVE_MEMBER_REQUEST, data: id });
    },
    [dispatch]
  );
  const onEnd = useCallback(() => {
    setEndOpen(true);
  }, [setEndOpen]);
  const onGrade = useCallback(() => {
    setGradeOpen(true);
  }, [setGradeOpen]);
  return (
    <>
      <MemberBox>
        <h1>멤버</h1>
        <MemberLists>
          {data.Users.map((v) => (
            <li key={v.id}>
              <Link href="">
                <a>
                  <span>{v.nickname}</span>
                </a>
              </Link>
              <p>-{v.position}</p>
              {me.id === data.leader && me.id !== v.id && (
                <button onClick={() => onExile(v.id)}>추방</button>
              )}
            </li>
          ))}
        </MemberLists>
        <EndBtn onClick={onEnd}>
          <BiError /> 종료
        </EndBtn>
        <EndBtn style={{ right: "150px" }} onClick={onGrade}>
          <BiUserVoice /> 평가
        </EndBtn>
        {endOpen && <EndForm close={setEndOpen} />}
        {gradeOpen && <GradeForm close={setGradeOpen} />}
      </MemberBox>
    </>
  );
}
