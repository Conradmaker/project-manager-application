import React, { useEffect } from "react";
import { MainContainer } from ".";
import { Positioner, Visual } from "../components/Banner";
import Layout from "../components/Layout";
import styled from "styled-components";
import Router from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import axios from "axios";

const InformationBox = styled.ul`
  margin-top: 200px;
  width: 650px;
  background: rgb(30, 66, 148);
  height: 120px;
  display: flex;

  li,
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 15px auto;
    box-sizing: border-box;
    border-right: 1px solid white;
    color: white;
    &:last-child {
      border: none;
    }
    h2,
    a h2 {
      font-size: 17px;
    }
    p,
    a p {
      font-size: 20px;
      font-weight: bold;
    }
    &:hover {
      h2 {
        font-size: 19px;
      }
      p {
        font-size: 25px;
      }
    }
  }
  a {
    margin: 0;
  }
`;
export default function Profile() {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!me) {
      alert("로그인먼저!");
      Router.replace("/");
    }
  }, [me]);
  return (
    <MainContainer>
      <Layout>
        <Positioner />
        <Visual>
          <h1>
            {me.nickname}님<small>반갑습니다.</small>
          </h1>
          <InformationBox>
            <li>
              <Link href="/project/1">
                <a>
                  <h2>진행중인 프로젝트</h2>
                  <p>{me.ProjectId ? me.Project.name : "없습니다"}</p>
                </a>
              </Link>
            </li>

            <li>
              <h2>평점</h2>
              <p>{me.grade}점</p>
            </li>
            <li>
              <h2>완료 프로젝트</h2>
              <p>3개</p>
            </li>
          </InformationBox>
        </Visual>
      </Layout>
    </MainContainer>
  );
}
