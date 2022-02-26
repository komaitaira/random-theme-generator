import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import styled from "styled-components";
import { Operation } from "../organisms/Operation";
import { NavyButton } from "../molecules/buttons/NavyButton";
import { useButton } from "../../hooks/useButton";
import { WhiteButton } from "../molecules/buttons/WhiteButton";
import { useCheckSelected } from "../../hooks/useCheckSelected";
import { BallTriangle } from "react-loader-spinner";
import { useRecoilState } from "recoil";
import { loadingState } from "../../store/loadingState";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { InfoBox } from "../molecules/box/InfoBox";

export const PrimaryConfirm: VFC = () => {
  const { themeState, periodState, isSelectedAll } = useCheckSelected();
  const [loading] = useRecoilState(loadingState);
  console.log("PrimaryConfirmコンポーネント");
  if (isSelectedAll()) {
    return loading ? (
      <div>
        <FlexWrapper>
          <BallTriangle color="#00BFFF" height={90} width={90} />
        </FlexWrapper>
        <SP>Now Generating...</SP>
      </div>
    ) : (
      <div>
        <Title />
        <InfoBox>
          <SP>表示テーマ数: {`${themeState.selected}`}</SP>
          <SP>撮影期限: {`${periodState.selected}`}</SP>
        </InfoBox>
      </div>
    );
  } else {
    return (
      <div>
        <Title />
        <InfoBox>
          <SP>必須選択項目が選ばれていません。</SP>
          <SP>もう一度ご確認ください。</SP>
        </InfoBox>
      </div>
    );
  }
};

export const SecondaryConfirm: VFC = () => {
  console.log("SecondaryConfirmコンポーネント");
  const { themeState, isSelectedAll } = useCheckSelected();
  const [loading] = useRecoilState(loadingState);
  const { onClickBack, onClickGenerate } = useButton();

  if (isSelectedAll()) {
    return loading ? (
      <></>
    ) : (
      <>
        <ExtendWrapper>
          <FlexWrapper>
            <div>
              <SDescription>テーマを生成します</SDescription>
              <SProgress>3/3</SProgress>
            </div>
          </FlexWrapper>
        </ExtendWrapper>
        <Operation>
          <WhiteButton onClickButton={() => onClickBack("/period")}>
            BACK
          </WhiteButton>
          <NavyButton
            onClickButton={() => {
              onClickGenerate(`/generate?limit=${themeState.selected}`);
            }}
          >
            GENERATE
          </NavyButton>
        </Operation>
      </>
    );
  } else {
    return (
      <Operation>
        <WhiteButton onClickButton={() => onClickBack("/period")}>
          BACK
        </WhiteButton>
      </Operation>
    );
  }
};

const ExtendWrapper = styled.div`
  text-align: center;
  height: 70%;
  position: relative;
`;

const SP = styled.p`
  color: #444;
  font-weight: bold;
`;

const SDescription = styled.h3`
  color: #13386f;
`;

const SProgress = styled.h4`
  color: #13386f;
`;
