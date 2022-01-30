import React, { VFC } from "react";
import { Select } from "../atoms/selectbox/Select";
import { Title } from "../atoms/title/Title";
import { Buttons } from "../molecules/Buttons";
import { ContentContainer } from "../molecules/ContentContainer";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Theme: VFC = () => {
  return (
    <DefaultLayout
      innerMainChildren={
        <>
          <Title />
          <Select>
            <option>テーマ数を選択してください</option>
          </Select>
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
