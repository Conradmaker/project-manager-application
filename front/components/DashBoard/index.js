import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../pages/index";
import DashBoard from "./DashBoard";
import MemberList from "./MemberList";

const ManagerBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  box-sizing: border-box;
  display: flex;
`;
const ManagerContainer = styled(MainContainer)`
  max-width: 1980px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Manager() {
  return (
    <ManagerContainer>
      <ManagerBox>
        <DashBoard />
        <MemberList />
      </ManagerBox>
    </ManagerContainer>
  );
}
