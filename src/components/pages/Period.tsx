import React, { VFC } from "react";
import { Select } from "../atoms/selectbox/Select";
import { Title } from "../atoms/title/Title";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Period: VFC = () => {
  return (
    <DefaultLayout>
      <Title />
      <Select>
        <option>撮影期限を選択してください</option>
      </Select>
    </DefaultLayout>
  );
};
