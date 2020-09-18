import Layout from "../components/Layout";
import Banner from "../components/Banner";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export default function Main() {
  // const {me}= useSelector(state => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LOAD_MY_INFO_REQUEST });
  }, [dispatch]);
  return (
    <MainContainer>
      <Layout>
        <Banner />
      </Layout>
    </MainContainer>
  );
}
