import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { Operation } from "../organisms/Operation";
import { ContentContainer } from "../molecules/ContentContainer";
import { DefaultLayout } from "../templates/DefaultLayout";
import { ThemeSelect } from "../atoms/selectbox/ThemeSelect";

export const Theme: VFC = () => {
  console.log("Themeコンポーネント");
  return (
    <DefaultLayout
      innerMainChildren={
        <>
          <Title />
          <ThemeSelect />
        </>
      }
      contentChildren={
        <>
          <ContentContainer />
          <Operation />
        </>
      }
    ></DefaultLayout>
  );
};
