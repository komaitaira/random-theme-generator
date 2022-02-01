import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {
  selectedPeriodState,
  selectedThemeState,
} from "../../store/selectState";

export const Confirm: VFC = () => {
  const themeState = useRecoilValue(selectedThemeState);
  const periodState = useRecoilValue(selectedPeriodState);
  console.log("Confirmコンポーネント");
  return (
    <>
      <Title />
      <ExtendWrapper>
        <SP>表示テーマ数: {`${themeState.text}`}</SP>
        <SP>撮影期限: {`${periodState.text}`}</SP>
      </ExtendWrapper>
    </>
  );
};

const ExtendWrapper = styled(SWrapper)`
  background-color: rgba(255, 255, 255, 0.2);
`;

const SP = styled.p`
  color: #fff;
`;
