import Layout from "../components/Layout";
import Banner from "../components/Banner";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
