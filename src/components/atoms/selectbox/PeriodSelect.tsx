import React, { VFC } from "react";
import { BaseSelect } from "./BaseSelect";

export const PeriodSelect: VFC = () => {
  return (
    <BaseSelect>
      <option>撮影期限を選択してください</option>
      <option value="one-week">1週間以内</option>
      <option value="one-month">1ヶ月以内</option>
      <option value="three-month">3ヶ月以内</option>
      <option value="six-month">6ヶ月以内</option>
      <option value="one-year">1年以内</option>
    </BaseSelect>
  );
};
