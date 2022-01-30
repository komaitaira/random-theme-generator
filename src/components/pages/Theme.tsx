import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { Buttons } from "../organisms/Operation";
import { ContentContainer } from "../molecules/ContentContainer";
import { DefaultLayout } from "../templates/DefaultLayout";
import { ThemeSelect } from "../atoms/selectbox/ThemeSelect";

export const Theme: VFC = () => {
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
          <Buttons />
        </>
      }
    ></DefaultLayout>
  );
};
