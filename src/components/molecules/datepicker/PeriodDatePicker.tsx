import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import { selectedPeriodState } from "../../../store/selectState";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

export const PeriodDatePicker = () => {
  const initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const setSelect = useSetRecoilState(selectedPeriodState);
  registerLocale("ja", ja);

  const handleChange = (date: Date) => {
    console.log(date); // 選択した日時
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const dayOfWeekArray = ["日", "月", "火", "水", "木", "金", "土"];
    const selectedDay = `${year}年${month}月${day}日(${dayOfWeekArray[dayOfWeek]})`;
    setStartDate(date);
    setSelect({ selected: selectedDay });
  };

  const { register } = useFormContext();

  return (
    <DatePicker
      {...register("period", { required: true })}
      dateFormat="yyyy/MM/dd"
      locale="ja"
      selected={startDate}
      onChange={handleChange}
      customInput={<SInput />}
    />
  );
};

const SInput = styled.input`
  max-width: 340px;
  width: 100%;
  height: 45px;
  margin: 5vh 0 0 0;
  padding: 0;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-size: 1rem;
`;
