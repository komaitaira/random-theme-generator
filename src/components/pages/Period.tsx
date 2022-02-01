import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { PeriodSelect } from "../atoms/selectbox/PeriodSelect";

export const Period: VFC = () => {
  console.log("Periodコンポーネント");
  return (
    <>
      <Title />
      <PeriodSelect />
    </>
  );
};
