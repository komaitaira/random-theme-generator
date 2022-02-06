import React, { VFC } from "react";
import { BaseSelect } from "../../atoms/selectbox/BaseSelect";
import { useSetRecoilState } from "recoil";
import { selectedThemeState } from "../../../store/selectState";

export const ThemeSelect: VFC = () => {
  const setSelect = useSetRecoilState(selectedThemeState);
  console.log("ThemeSelectコンポーネント");
  const onChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.selectedOptions[0].textContent;
    if (typeof text !== "string") {
      return;
    }
    setSelect({
      value: e.target.value,
      text: text,
    });
  };

  return (
    <BaseSelect onChangeSelect={onChangeTheme}>
      <option value="">テーマ数を選択してください</option>
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
