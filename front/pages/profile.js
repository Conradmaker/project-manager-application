import React from "react";
import { MainContainer } from ".";
import { Visual } from "../components/Banner";
import Layout from "../components/Layout";
import styled from "styled-components";

const InformationBox = styled.div``;
export default function profile() {
  return (
    <MainContainer>
      <Layout>
        <Visual>
          <h1>
            Conrad님 <br />
            반갑습니다.
          </h1>
        </Visual>
      </Layout>
    </MainContainer>
  );
}
