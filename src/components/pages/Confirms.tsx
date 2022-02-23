import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import styled from "styled-components";
import { Operation } from "../organisms/Operation";
import { NavyButton } from "../molecules/buttons/NavyButton";
import { useButton } from "../../hooks/useButton";
import { WhiteButton } from "../molecules/buttons/WhiteButton";
import { useCheckSelected } from "../../hooks/useCheckSelected";

export const PrimaryConfirm: VFC = () => {
  const { themeState, periodState, isSelectedAll } = useCheckSelected();
  console.log("PrimaryConfirmコンポーネント");
  return isSelectedAll() ? (
    <>
      <Title />
      <BlurWrapper>
        <SP>表示テーマ数: {`${themeState.selected}`}</SP>
        <SP>撮影期限: {`${periodState.selected}`}</SP>
      </BlurWrapper>
    </>
  ) : (
    <>
      <Title />
      <BlurWrapper>
        <SP>必須選択項目が選ばれていません。</SP>
        <SP>もう一度ご確認ください。</SP>
      </BlurWrapper>
    </>
  );
};

export const SecondaryConfirm: VFC = () => {
  console.log("SecondaryConfirmコンポーネント");
  const { themeState, isSelectedAll } = useCheckSelected();
  const { onClickBack, onClickGenerate } = useButton();
  return isSelectedAll() ? (
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
        <NavyButton
          onClickButton={() =>
            onClickGenerate(`/generate?limit=${themeState.selected}`)
          }
        >
          GENERATE
        </NavyButton>
      </Operation>
    </>
  ) : (
    <Operation>
      <WhiteButton onClickButton={() => onClickBack("/period")}>
        BACK
      </WhiteButton>
    </Operation>
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
