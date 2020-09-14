import React, { useEffect, useState } from "react";
import { MainContainer } from "../index";
import { Visual, Positioner, BtnWrapper } from "../../components/Banner";
import { DownIcon } from "../list";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { bling } from "../about";
import { ImArrowDown2 } from "react-icons/im";
import Manager from "../../components/DashBoard/";

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

export default function ProjectManage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onVisible() {
      if (window.pageYOffset > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      console.log(window.pageYOffset);
    }
    window.addEventListener("scroll", onVisible);
  }, []);
  return (
    <>
      <MainContainer>
        <Layout visible={visible}>
          <Positioner>
            <Visual>
              <h1>오늘도 화이팅</h1>
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
      <Manager />
    </>
  );
}
