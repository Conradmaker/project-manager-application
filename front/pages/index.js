import Layout from "../components/Layout";
import Banner from "../components/Banner";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export default function Main() {
  return (
    <MainContainer>
      <Layout>
        <Banner />
      </Layout>
    </MainContainer>
  );
}
