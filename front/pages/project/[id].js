import React, { useEffect, useState } from "react";
import { MainContainer } from "../index";
import { Visual, Positioner, BtnWrapper } from "../../components/Banner";
import { DownIcon } from "../list";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { ImArrowDown2 } from "react-icons/im";
import Manager from "../../components/DashBoard/";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { LOAD_PROJECT_REQUEST } from "../../reducers/project";
import wrapper from "../../store/configureStore";
import { END } from "redux-saga";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";

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

function ProjectManage() {
  const { me } = useSelector((state) => state.user);
  const { projectInfo } = useSelector((state) => state.project);
  console.log(projectInfo);
  const dispatch = useDispatch();
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
  //   if (me.Project === null) {
  //     alert("진행중인 프로젝트가 없습니다.");
  //     Router.push("/list");
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
                <Progress></Progress>
                <h3>인원을 모으고 있어요</h3>
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
    console.log("SSR시작");
    console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_PROJECT_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    console.log("SSR끝");
    await context.store.sagaTask.toPromise();
  }
);
export default ProjectManage;
