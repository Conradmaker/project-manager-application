import Link from "next/link";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { REMOVE_MEMBER_REQUEST } from "../../reducers/manage";

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
  h1 {
    font-size: 30px;
  }
`;
export default function MemberList({ data }) {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const onExile = useCallback(
    (id) => {
      dispatch({ type: REMOVE_MEMBER_REQUEST, data: id });
    },
    [dispatch]
  );
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
      </MemberBox>
    </>
  );
}
