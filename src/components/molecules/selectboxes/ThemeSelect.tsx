import React, { memo, VFC } from "react";
import { BaseSelect } from "../../atoms/selectbox/BaseSelect";
import { useSetRecoilState } from "recoil";
import { selectedThemeState } from "../../../store/selectState";
import { useFormContext } from "react-hook-form";

// eslint-disable-next-line react/display-name
export const ThemeSelect: VFC = memo(() => {
  const setSelect = useSetRecoilState(selectedThemeState);
  console.log("ThemeSelectコンポーネント");
  const onChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.selectedOptions[0].textContent;
    if (typeof text !== "string") {
      return;
    }
    setSelect({ selected: text });
  };

  const { register } = useFormContext();

  return (
    <BaseSelect
      {...register("theme", { required: true, onChange: onChangeTheme })}
    >
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
});
