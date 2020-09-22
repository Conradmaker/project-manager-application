import React, { useCallback, useState, useEffect } from "react";
import IMG from "../../assets/img/3.png";
import { Positioner, Visual } from "../../components/Banner";
import Layout from "../../components/Layout";
import styled, { keyframes } from "styled-components";
import { bling } from "../about";
import { ImArrowDown2 } from "react-icons/im";
import ListItem from "../../components/ListItem";
import FixBtn from "../../components/FixBtn";
import PopForm from "../../components/PopForm";
import { MainContainer } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_PROJECTS_REQUEST } from "../../reducers/project";
import { useRouter } from "next/router";
import { LOAD_CATAGORY_REQUEST } from "../../reducers/project";

const ItemContainer = styled.ul`
  display: grid;
  gap: 20px 40px;
  grid-template-columns: repeat(3, 1fr);
`;

const Lists = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  h1 {
    margin: 0 0 50px;
    font-size: 30px;
  }
`;

export const ListBanner = styled(Visual)`
  height: 90vh;
  background-image: url(${IMG});
`;

export const DownIcon = styled.i`
  position: absolute;
  bottom: 20px;
  left: 50%;
  font-size: 30px;
  animation: ${bling} 1s ease-in-out alternate infinite;
`;

export default function Catagory() {
  const router = useRouter();
  const { me } = useSelector((state) => state.user);
  const { projectList } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => {
    if (!me) return alert("로그인이 필요합니다.");
    setOpen(!open);
  }, [me]);

  useEffect(() => {
    dispatch({ type: LOAD_CATAGORY_REQUEST, data: router.query.id });
  }, [dispatch, router]);
  console.log(router.query.id);
  return (
    <Layout>
      <MainContainer>
        <Positioner />
        <ListBanner>
          <h1>청춘은 인생의 황금시대다</h1>
        </ListBanner>
        <DownIcon>
          <ImArrowDown2 />
        </DownIcon>
      </MainContainer>
      <Lists>
        {router.query.id === "1" && <h1>취업용 프로젝트</h1>}
        {router.query.id === "2" && <h1>사이드 프로젝트</h1>}
        {router.query.id === "3" && <h1>토이 프로젝트</h1>}
        {router.query.id === "4" && <h1>스타트업 프로젝트</h1>}
        {router.query.id === "5" && <h1>기업용 프로젝트</h1>}
        <ItemContainer>
          {projectList.map((data) => (
            <ListItem key={data.id} data={data} />
          ))}
        </ItemContainer>
      </Lists>
      <FixBtn open={onOpen} />
      {open && <PopForm header="makeProject" close={setOpen} />}
    </Layout>
  );
}
