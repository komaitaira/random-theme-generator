import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import styled from "styled-components";
import { Operation } from "../organisms/Operation";
import { useButton } from "../../hooks/useButton";
import { WhiteButton } from "../molecules/buttons/WhiteButton";
import { useCheckSelected } from "../../hooks/useCheckSelected";
import { useRecoilValue } from "recoil";
import { generatedState } from "../../store/generatedState";
import { LightBlueButton } from "../molecules/buttons/LightBlueButton";
import { InfoBox } from "../molecules/box/InfoBox";
import { SFlexWrapper } from "../atoms/wrapper/FlexWrapper";

export const PrimaryResult: VFC = () => {
  const { periodState, isSelectedAll } = useCheckSelected();
  const themeList = useRecoilValue(generatedState);
  console.log("PrimaryResultコンポーネント");
  return isSelectedAll() && themeList.length > 0 ? (
    <MainWrapper>
      <div>
        <Title />
        <InfoBox>
          {themeList.map((theme: string, index: number) => (
            <SP key={index}>
              No.{index + 1} {theme}
            </SP>
          ))}
          <SProgress>撮影期限: {`${periodState.selected}`}</SProgress>
        </InfoBox>
      </div>
    </MainWrapper>
  ) : (
    <div>
      <Title />
      <InfoBox>
        <SP>必須選択項目が選ばれていません。</SP>
        <SP>もう一度ご確認ください。</SP>
      </InfoBox>
    </div>
  );
};

export const SecondaryResult: VFC = () => {
  console.log("SecondaryResultコンポーネント");
  const { isSelectedAll } = useCheckSelected();
  const themeList = useRecoilValue(generatedState);
  const { onClickBack } = useButton();
  return isSelectedAll() && themeList.length > 0 ? (
    <>
      <Operation>
        <WhiteButton onClickButton={() => onClickBack("/")}>HOME</WhiteButton>
        <LightBlueButton onClickButton={() => console.log("aaa")}>
          TWEET
        </LightBlueButton>
      </Operation>
    </>
  ) : (
    <Operation>
      <WhiteButton onClickButton={() => onClickBack("/")}>HOME</WhiteButton>
    </Operation>
  );
};

const MainWrapper = styled(SFlexWrapper)`
  position: relative;
  z-index: 100;
  padding: 0;
  width: 90vw;
  top: 15vh;
  max-width: 880px;
`;

const SP = styled.p`
  color: #444;
  font-weight: bold;
`;

const SProgress = styled.h4`
  color: #13386f;
`;
