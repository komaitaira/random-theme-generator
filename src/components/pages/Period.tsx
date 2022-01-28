import React, { VFC } from "react";
import { Select } from "../atoms/selectbox/Select";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Period: VFC = () => {
  return (
    <DefaultLayout>
      <Select>
        <option>撮影期限を選択してください</option>
      </Select>
    </DefaultLayout>
  );
};
