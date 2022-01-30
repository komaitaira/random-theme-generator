import React, { VFC } from "react";
import { Select } from "../atoms/selectbox/Select";
import { Title } from "../atoms/title/Title";
import { Buttons } from "../molecules/Buttons";
import { ContentContainer } from "../molecules/ContentContainer";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Period: VFC = () => {
  return (
    <DefaultLayout
      innerMainChildren={
        <>
          <Title />
          <Select>
            <option>撮影期限を選択してください</option>
            <option value="one-week">1週間以内</option>
            <option value="one-month">1ヶ月以内</option>
            <option value="three-month">3ヶ月以内</option>
            <option value="six-month">6ヶ月以内</option>
            <option value="one-year">1年以内</option>
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
