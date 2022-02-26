import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { SWrapper } from "../atoms/wrapper/Wrapper";
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
        <BlurWrapper>
          <SP>表示テーマ数: {`${themeState.selected}`}</SP>
          <SP>撮影期限: {`${periodState.selected}`}</SP>
        </BlurWrapper>
      </div>
    );
  } else {
    return (
      <div>
        <Title />
        <BlurWrapper>
          <SP>必須選択項目が選ばれていません。</SP>
          <SP>もう一度ご確認ください。</SP>
        </BlurWrapper>
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

const BlurWrapper = styled(SWrapper)`
  background-color: rgba(255, 255, 255, 0.2);
`;

const SP = styled.p`
  color: #fff;
`;

const ExtendWrapper = styled.div`
  text-align: center;
  height: 70%;
  position: relative;
`;

const SDescription = styled.h3`
  color: #13386f;
`;

const SProgress = styled.h4`
  color: #13386f;
`;
