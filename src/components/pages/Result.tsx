import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import styled from "styled-components";
import { Operation } from "../organisms/Operation";
import { NavyButton } from "../molecules/buttons/NavyButton";
import { useButton } from "../../hooks/useButton";
import { WhiteButton } from "../molecules/buttons/WhiteButton";
import { useCheckSelected } from "../../hooks/useCheckSelected";
import { useRecoilValue } from "recoil";
import { generatedState } from "../../store/generatedState";
import { LightBlueButton } from "../molecules/buttons/LightBlueButton";

export const PrimaryResult: VFC = () => {
  const { periodState, isSelectedAll } = useCheckSelected();
  const themeList = useRecoilValue(generatedState);
  console.log("PrimaryResultコンポーネント");
  return isSelectedAll() && themeList.length > 0 ? (
    <MainWrapper>
      <Title />
      <ResultBox>
        {themeList.map((theme: string, index: number) => (
          <SP key={index}>
            No.{index + 1} {theme}
          </SP>
        ))}
        <SProgress>撮影期限: {`${periodState.selected}`}</SProgress>
      </ResultBox>
    </MainWrapper>
  ) : (
    <>
      <ResultBox>
        <SP>必須選択項目が選ばれていません。</SP>
        <SP>もう一度ご確認ください。</SP>
      </ResultBox>
    </>
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

const MainWrapper = styled(SWrapper)`
  position: relative;
  z-index: 100;
  padding: 0;
  width: 85vw;
  max-width: 880px;
`;

const ResultBox = styled(SWrapper)`
  background-color: #fff;
  border-radius: 16px;
  border: 5px solid #ddd;
  width: 85%;
  max-width: 880px;
  max-height: 56vh;
  overflow-y: scroll;
  margin: auto;
  @media screen and (max-height: 800px) {
    max-height: 45vh;
  }
`;

const SP = styled.p`
  color: #444;
  font-weight: bold;
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
