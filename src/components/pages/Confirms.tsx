import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {
  selectedPeriodState,
  selectedThemeState,
} from "../../store/selectState";
import { Operation } from "../organisms/Operation";
import { NavyButton } from "../molecules/buttons/NavyButton";
import { useButton } from "../../hooks/useButton";
import { WhiteButton } from "../molecules/buttons/WhiteButton";

export const PrimaryConfirm: VFC = () => {
  const themeState = useRecoilValue(selectedThemeState);
  const periodState = useRecoilValue(selectedPeriodState);
  console.log("PrimaryConfirmコンポーネント");
  return (
    <>
      <Title />
      <BlurWrapper>
        <SP>表示テーマ数: {`${themeState.text}`}</SP>
        <SP>撮影期限: {`${periodState.text}`}</SP>
      </BlurWrapper>
    </>
  );
};

export const SecondaryConfirm: VFC = () => {
  console.log("SecondaryConfirmコンポーネント");
  const { onClickBack, onClickGenerate } = useButton();
  return (
    <>
      <ExtendWrapper>
        <SDiv>
          <SDescription>テーマを生成します</SDescription>
          <SProgress>3/3</SProgress>
        </SDiv>
      </ExtendWrapper>
      <Operation>
        <WhiteButton onClickButton={() => onClickBack("/period")}>
          BACK
        </WhiteButton>
        <NavyButton onClickButton={() => onClickGenerate("/generate")}>
          NEXT
        </NavyButton>
      </Operation>
    </>
  );
};

const BlurWrapper = styled(SWrapper)`
  background-color: rgba(255, 255, 255, 0.2);
`;

const SP = styled.p`
  color: #fff;
`;

const ExtendWrapper = styled(SWrapper)`
  text-align: center;
  height: 23vh;
  position: relative;
`;

const SDiv = styled.div`
  position: absolute;
  padding: 2vw;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
`;

const SDescription = styled.h3`
  color: #13386f;
`;

const SProgress = styled.h4`
  color: #13386f;
`;
