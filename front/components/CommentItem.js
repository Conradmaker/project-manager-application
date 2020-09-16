import React from "react";
import styled from "styled-components";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useSelector } from "react-redux";

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

export default function CommentItem({ data, leader }) {
  const { me } = useSelector((state) => state.user);
  return (
    <CommentCard>
      <h1>-{data.User.nickname}</h1>
      <p>{data.createdAt}</p>
      <span>{data.content}</span>
      {me && (
        <i>
          {leader === me.id && me.id !== data.id && <MdAddCircle />}
          {data.User.id === me.id && (
            <MdRemoveCircle style={{ color: "red" }} />
          )}
        </i>
      )}
    </CommentCard>
  );
}
