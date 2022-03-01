import React, { memo, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import { getDateObj, selectedPeriodState } from "../../../store/selectState";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Controller, useFormContext } from "react-hook-form";

// eslint-disable-next-line react/display-name
export const PeriodDatePicker = memo(() => {
  const initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const [select, setSelect] = useRecoilState(selectedPeriodState);
  registerLocale("ja", ja);
  const { register, control } = useFormContext();

  const handleChange = (date: Date) => {
    console.log(date); // 選択した日時
    if (date) {
      const d = getDateObj(date);
      const selectedDay = `${d.year}年${d.month}月${d.day}日(${d.dayOfWeek})`;
      setStartDate(new Date(`${d.year}/${d.month}/${d.day}`));
      setSelect({
        selected: selectedDay,
        selected_date: `${d.year}/${d.month}/${d.day}`,
      });
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
              const d = getDateObj(now);
              return startDate >= new Date(`${d.year}/${d.month}/${d.day}`);
            },
          })}
          dateFormat="yyyy/MM/dd"
          locale="ja"
          selected={new Date(select.selected_date)}
          onChange={handleChange}
          customInput={<SInput />}
        />
      )}
    />
  );
});

const SInput = styled.input`
  max-width: 340px;
  width: 100%;
  height: 45px;
  padding: 0;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-size: 1rem;
`;
