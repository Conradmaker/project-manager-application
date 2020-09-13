import React from "react";
import styled from "styled-components";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const CommentCard = styled.article`
  position: relative;
  h1 {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 0px;
    color: #495057;
  }
  span {
    padding: 5px 0;
    color: #343a40;
    width: 100%;
  }
  p {
    margin: 5px 0;
    font-size: 14px;
  }
  i {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 20px;
    font-size: 40px;
    color: #1e4294;
  }
`;

export default function CommentItem() {
  return (
    <CommentCard>
      <h1>-Conrad</h1>
      <p>2020.19.13</p>
      <span>참여하고 싶어요</span>
      <i>
        {/* 팀장이면 */}
        <MdAddCircle />
        {/* 작성자면 */}
        <MdRemoveCircle style={{ color: "red" }} />
      </i>
    </CommentCard>
  );
}
