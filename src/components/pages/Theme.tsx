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
            <option>表示するテーマ数を選択してください</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
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
