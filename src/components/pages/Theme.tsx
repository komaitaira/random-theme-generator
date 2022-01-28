import React, { VFC } from "react";
import { Select } from "../atoms/selectbox/Select";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Theme: VFC = () => {
  return (
    <DefaultLayout>
      <Select>
        <option>テーマ数を選択してください</option>
      </Select>
    </DefaultLayout>
  );
};
