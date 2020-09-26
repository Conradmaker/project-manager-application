import Layout from "../components/Layout";
import Banner from "../components/Banner";
import styled from "styled-components";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import { LOAD_PROJECT_REQUEST } from "../reducers/project";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

function Main() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (me) {
      dispatch({
        type: LOAD_PROJECT_REQUEST,
        data: me.ProjectId,
      });
    }
  }, [dispatch, me]);
  return (
    <MainContainer>
      <Layout>
        <Banner />
      </Layout>
    </MainContainer>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log("SSR시작");
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    console.log("SSR끝");
    await context.store.sagaTask.toPromise();
  }
);

export default Main;
