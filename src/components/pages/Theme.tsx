import React, { VFC } from "react";
import { Select } from "../atoms/selectbox/Select";
import { Title } from "../atoms/title/Title";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Theme: VFC = () => {
  return (
    <DefaultLayout>
      <Title />
      <Select>
        <option>テーマ数を選択してください</option>
      </Select>
    </DefaultLayout>
  );
};
