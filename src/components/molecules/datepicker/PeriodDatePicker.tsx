import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import { selectedPeriodState } from "../../../store/selectState";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Controller, useFormContext } from "react-hook-form";

export const PeriodDatePicker = () => {
  const initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const setSelect = useSetRecoilState(selectedPeriodState);
  registerLocale("ja", ja);
  const { register, control } = useFormContext();

  const getDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    return { year, month, day, dayOfWeek };
  };

  const handleChange = (date: Date) => {
    console.log(date); // 選択した日時
    if (date) {
      const d = getDate(date);
      const dayOfWeekArray = ["日", "月", "火", "水", "木", "金", "土"];
      const selectedDay = `${d.year}年${d.month}月${d.day}日(${
        dayOfWeekArray[d.dayOfWeek]
      })`;
      setStartDate(new Date(`${d.year}-${d.month}-${d.day} 23:59:59`));
      setSelect({ selected: selectedDay });
    }
  };

  return (
    <Controller
      control={control}
      name="period"
      render={() => (
        <DatePicker
          {...register("period", {
            validate: () => {
              const now = new Date();
              const d = getDate(now);
              return startDate >= new Date(`${d.year}-${d.month}-${d.day}`);
            },
          })}
          dateFormat="yyyy/MM/dd"
          locale="ja"
          selected={startDate}
          onChange={handleChange}
          customInput={<SInput />}
        />
      )}
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
