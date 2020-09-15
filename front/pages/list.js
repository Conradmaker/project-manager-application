import React, { useCallback, useState } from "react";
import IMG from "../assets/img/3.png";
import { Positioner, Visual } from "../components/Banner";
import Layout from "../components/Layout";
import styled, { keyframes } from "styled-components";
import { bling } from "./about";
import { ImArrowDown2 } from "react-icons/im";
import ListItem from "../components/ListItem";
import FixBtn from "../components/FixBtn";
import PopForm from "../components/PopForm";
import { MainContainer } from "./index";
import { useSelector } from "react-redux";

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

export default function List() {
  const { me } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => {
    if (!me) return alert("로그인이 필요합니다.");

    setOpen(!open);
  }, [me]);
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
        <h1>취업용 프로젝트</h1>
        <ItemContainer>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ItemContainer>
      </Lists>
      <FixBtn open={onOpen} />
      {open && <PopForm header="makeProject" close={setOpen} />}
    </Layout>
  );
}
