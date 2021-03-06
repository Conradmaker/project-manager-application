import React, { useState } from "react";
import styled from "styled-components";
import { BoardTitle } from "./Board";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import PopForm from "../PopForm";
import { useSelector } from "react-redux";

const DashBCalender = styled.div`
  grid-column: 1/7;
  grid-row: 6/13;
  border-top: 1px solid rgb(30, 66, 148);
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const AddBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 60px;
  height: 30px;
  background: rgb(30, 66, 148);
  color: white;
  font-size: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgb(60, 86, 188);
  }
`;
const locales = {
  "ko-KR": require("date-fns/locale/ko"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function Calender() {
  const { Schedules } = useSelector((state) => state.project.projectInfo);
  const [addopen, setAddopen] = useState(false);
  const array = [];
  for (let i = 0; i < Schedules.length; i++) {
    array.push({
      title: Schedules[i].title,
      allDay: true,
      start: new Date(Schedules[i].start),
      end: new Date(Schedules[i].end),
    });
  }
  return (
    <DashBCalender>
      <BoardTitle>프로젝트 일정</BoardTitle>
      <Calendar
        localizer={localizer}
        events={array}
        view="month"
        views={["month"]}
        startAccessor="start"
        endAccessor="end"
        style={{ flex: "1", height: "auto", width: "100%" }}
      />
      <AddBtn onClick={() => setAddopen(true)}>Add</AddBtn>
      {addopen && <PopForm header="calender" close={setAddopen}></PopForm>}
    </DashBCalender>
  );
}
