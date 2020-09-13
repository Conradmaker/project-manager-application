import React from "react";
import styled from "styled-components";
import { MdLightbulbOutline } from "react-icons/md";
const BottonBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 100px;
  height: 50px;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;

  background: rgb(30, 66, 148);
  color: white;
  box-shadow: 1px 1px 10px gray;

  cursor: pointer;
  transition: all 0.3s ease;

  font-size: 20px;

  &:hover {
    box-shadow: 1px 3px 5px gray;
    transform: translateY(-5px) scale(1.1);
  }
`;

export default function FixBtn({ open }) {
  return (
    <BottonBtn onClick={open}>
      <MdLightbulbOutline />
      등록
    </BottonBtn>
  );
}
