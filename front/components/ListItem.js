import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Detail from "./Detail";

const ImgBox = styled.div`
  width: 100%;
  height: 180px;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    min-height: 100px;
    max-height: 180px;
  }
`;

const ItemBox = styled.li`
  min-height: 250px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;

  h2 {
    font-size: 20px;
    margin: 15px 0;
  }
  p {
    margin-bottom: 15px;
    overflow: hidden;
  }
  button {
    height: 30px;
    width: 90%;

    background: rgb(30, 66, 148);
    color: white;
    border: none;
    border-radius: 3px;
    align-self: center;
    outline: white;

    cursor: pointer;
  }

  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 3px gray;
  }
`;

export default function ListItem({ data }) {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => {
    setOpen(!open);
  }, []);
  return (
    <>
      <ItemBox>
        <ImgBox>
          <img
            src={`http://localhost:3030/${data.Project.Images[0].src}`}
            alt=""
          />
        </ImgBox>
        <h2>{data.Project.name}</h2>
        <p>희망인원: {data.Project.number} 명</p>
        <button onClick={onOpen}>더보기</button>
      </ItemBox>
      {open && <Detail close={setOpen} data={data} />}
    </>
  );
}
