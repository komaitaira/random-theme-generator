import React, { VFC } from "react";
import { BaseSelect } from "../../atoms/selectbox/BaseSelect";
import { useSetRecoilState } from "recoil";
import { selectedPeriodState } from "../../../store/selectState";

export const PeriodSelect: VFC = () => {
  const setSelect = useSetRecoilState(selectedPeriodState);
  console.log("PeriodSelectコンポーネント");
  const onChangePeriod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("onChangePeriod called.");
    const text = e.target.selectedOptions[0].textContent;
    if (typeof text !== "string") {
      return;
    }
    setSelect({
      value: e.target.value,
      text: text,
    });
  };
  return (
    <BaseSelect onChangeSelect={onChangePeriod}>
      <option value="">撮影期限を選択してください</option>
      <option value="one-week">1週間以内</option>
      <option value="one-month">1ヶ月以内</option>
      <option value="three-month">3ヶ月以内</option>
      <option value="six-month">6ヶ月以内</option>
      <option value="one-year">1年以内</option>
    </BaseSelect>
  );
};
