import React from "react";
import styled from "styled-components";

const CommentCard = styled.article`
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
`;

export default function CommentItem() {
  return (
    <CommentCard>
      <h1>-Conrad</h1>
      <p>2020.19.13</p>
      <span>참여하고 싶어요</span>
    </CommentCard>
  );
}
