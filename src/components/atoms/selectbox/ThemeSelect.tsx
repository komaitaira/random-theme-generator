import React, { VFC } from "react";
import { BaseSelect } from "./BaseSelect";
import { useSetRecoilState } from "recoil";
import { selectedThemeState } from "../../../store/selectState";

export const ThemeSelect: VFC = () => {
  const setSelect = useSetRecoilState(selectedThemeState);
  console.log("ThemeSelectコンポーネント");
  const onChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("onChangeTheme called.");
    setSelect({
      selectedTheme: e.target.value,
    });
  };
  return (
    <BaseSelect onChangeSelect={onChangeTheme}>
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
    </BaseSelect>
  );
};
