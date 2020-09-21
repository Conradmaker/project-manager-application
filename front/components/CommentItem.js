import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { MdAddCircle, MdCheck, MdRemoveCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_COMMENT_REQUEST } from "../reducers/project";
import { ADD_MEMBER_REQUEST } from "../reducers/manage";

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
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { addMemberDone } = useSelector((state) => state.manage);
  const onRemoveComment = useCallback(() => {
    dispatch({ type: REMOVE_COMMENT_REQUEST, data: data.id });
  }, [dispatch]);
  const onAddMember = useCallback(() => {
    dispatch({ type: ADD_MEMBER_REQUEST, data: data.User.id });
    alert("팀원이 추가되었어요!");
  }, [dispatch]);
  const onClickMember = useCallback(() => {
    alert("우리팀원이에요!");
  }, []);
  console.log(data, ",", leader);
  return (
    <CommentCard>
      <h1>{data.User.nickname}</h1>
      <p>{data.createdAt}</p>
      <span>{data.content}</span>
      {me && (
        <i>
          {leader.leader === me.id &&
            me.id !== data.User.id &&
            (leader.id !== data.User.ProjectId ? (
              <MdAddCircle onClick={onAddMember} />
            ) : (
              <MdCheck onClick={onClickMember} />
            ))}
          {data.User.id === me.id && (
            <MdRemoveCircle
              style={{ color: "red" }}
              onClick={onRemoveComment}
            />
          )}
        </i>
      )}
    </CommentCard>
  );
}
