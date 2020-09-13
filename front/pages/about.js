import React from "react";
import IMG from "../assets/img/2.png";
import { Positioner, Visual } from "../components/Banner";
import Layout from "../components/Layout";
import styled, { keyframes } from "styled-components";
import {
  ImBaffled,
  ImArrowDown2,
  ImCool,
  ImAccessibility,
  ImCogs,
  ImRss,
} from "react-icons/im";

export const bling = keyframes`
 0% { height: 100px; width: 100px; }
 100% { height: 50px; width: 100px; opacity: 0.6; }
`;

const Solution = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  article {
    width: 30%;
    display: flex;
    margin: 0 30px;
    align-items: center;
    justify-content: center;
    i {
      width: 80px;
      height: 80px;
      font-size: 80px;
    }
    div {
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 23px;
        margin-bottom: 20px;
      }
      p {
      }
    }
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  i {
    margin: 0 50px;
    width: 80px;
    height: 80px;
    font-size: 80px;
  }
  ul {
    li {
      line-height: 1.3;
      list-style: circle;

      font-size: 20px;
    }
  }
`;

const Summary = styled.section`
  height: 400px;
  margin: 0 auto;
  padding: 30px;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 33px;
    margin: 0px 0 80px 0;
    font-weight: bold;
  }
`;

const AboutBanner = styled(Visual)`
  height: 90vh;
  background-image: url(${IMG});
  i {
    position: absolute;
    bottom: 80px;
    left: 50%;
    font-size: 30px;
    animation: ${bling} 1s ease-in-out alternate infinite;
  }
`;

export default function About() {
  return (
    <Layout>
      <Positioner />
      <AboutBanner>
        <h1>청춘은 인생의 황금시대다</h1>
        <i>
          <ImArrowDown2 />
        </i>
      </AboutBanner>
      <Summary>
        <h1>우리는 불편해서 찾아야만 했다</h1>
        <Description>
          <i>
            <ImBaffled />
          </i>
          <ul>
            <li>왜 경력만들기가 힘들어야 할까요?</li>
            <li>좋은 팀을 만들어야 좋은 결과가 나옵니다.</li>
            <li>그러나 좋은 팀원을 만나는 일은 너무 어려운 일입니다.</li>
            <li>프로젝트를 시작하기에 앞서 지치지 마세요</li>
          </ul>
        </Description>
      </Summary>
      <Summary style={{ background: "rgb(219, 236, 248)" }}>
        <h1>못찾아서 만들어버렸다!</h1>
        <Solution>
          <article>
            <i>
              <ImAccessibility />
            </i>
            <div>
              <h2>목적에 맞는 팀원 검색</h2>
              <p>블라블라블라블라</p>
            </div>
          </article>
          <article>
            <i>
              <ImCogs />
            </i>
            <div>
              <h2>프로젝트 관리</h2>
              <p>블라블라블라블라</p>
            </div>
          </article>
        </Solution>
      </Summary>
      <Summary>
        <h1>걱정 말고 너도 당장 시작고고</h1>
        <Solution>
          <article>
            <div>
              <i>
                <ImRss />
              </i>
              <h2>좋은 아이디어가 떠올랐나요?</h2>
            </div>
            <div>
              <i>
                <ImCogs />
              </i>
              <h2>고민말고 시작해보세요!</h2>
            </div>
          </article>
        </Solution>
      </Summary>
    </Layout>
  );
}
