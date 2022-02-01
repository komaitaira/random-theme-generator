import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { ThemeSelect } from "../atoms/selectbox/ThemeSelect";

export const Theme: VFC = () => {
  console.log("Themeコンポーネント");
  return (
    <>
      <Title />
      <ThemeSelect />
    </>
  );
};
