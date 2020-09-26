import React, { useEffect, useState } from "react";
import { MainContainer } from "../index";
import { Visual, Positioner, BtnWrapper } from "../../components/Banner";
import { DownIcon } from "../list";
import Layout from "../../components/Layout";
import styled, { css } from "styled-components";
import { ImArrowDown2 } from "react-icons/im";
import Manager from "../../components/DashBoard/";
import { useSelector } from "react-redux";
import Router from "next/router";
import { LOAD_PROJECT_REQUEST } from "../../reducers/project";
import wrapper from "../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";

const Progress = styled.div`
  width: 50%;
  height: 30px;
  background: #fff;
  border: 1px solid rgb(30, 66, 148);
  border-radius: 15px;
  margin: 20px 0 10px 0;

  &::after {
    width: 60%;
    content: "60%";
    text-align: center;
    font-size: 25px;
    color: #fff;
    display: block;
    height: 30px;
    border-radius: 15px;
    border: 1px solid rgb(30, 66, 148);
    background: rgb(30, 66, 148);
    ${(props) =>
      props.progress === 0 &&
      css`
        width: 20%;
        content: "20%";
      `}
    ${(props) =>
      props.progress === 1 &&
      css`
        width: 40%;
        content: "40%";
      `}
      ${(props) =>
      props.progress === 2 &&
      css`
        width: 60%;
        content: "60%";
      `}
      ${(props) =>
      props.progress === 3 &&
      css`
        width: 80%;
        content: "80%";
      `}
      ${(props) =>
      props.progress === 4 &&
      css`
        width: 100%;
        content: "100%";
      `}
  }
`;

const ProgressBox = styled.div`
  margin: 0 auto;
  position: absolute;
  bottom: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 26px;
    font-weight: bold;
  }
  h3 {
    font-size: 20px;
  }
`;

function Manage() {
  const { me } = useSelector((state) => state.user);
  const { projectInfo } = useSelector((state) => state.project);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onVisible() {
      if (window.pageYOffset > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener("scroll", onVisible);
  }, []);
  // useEffect(() => {
  //   if (!me) {
  //     Router.replace("/");
  //   }
  // }, [me]);

  return (
    <>
      <MainContainer>
        <Layout visible={visible}>
          <Positioner>
            <Visual>
              <h1>
                {projectInfo.name}
                <br /> 오늘도 화이팅
              </h1>

              <DownIcon>
                <ImArrowDown2 />
              </DownIcon>
              <ProgressBox>
                <h2>진행상황</h2>
                <Progress progress={projectInfo.progress} />
                <h3>
                  {projectInfo.progress === 0 && "인원을 모으고 있어요"}
                  {projectInfo.progress === 1 && "이제 시작해볼까요?"}
                  {projectInfo.progress === 2 && "좀만더 힘내세요!"}
                  {projectInfo.progress === 3 && "고지가 눈앞이에요!"}
                  {projectInfo.progress === 4 && "고생하셨습니다!"}
                </h3>
              </ProgressBox>
            </Visual>
          </Positioner>
        </Layout>
      </MainContainer>
      <Manager data={projectInfo} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log(context.query);
    console.log("SSR시작");
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_PROJECT_REQUEST,
      data: context.query.id,
    });

    context.store.dispatch(END);
    console.log("SSR끝");
    await context.store.sagaTask.toPromise();
    if (!context.store.getState().user.me) {
      context.res.writeHead(302, { Location: "/" });
      context.res.end();
    }
  }
);
export default Manage;
