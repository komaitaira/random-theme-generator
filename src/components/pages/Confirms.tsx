import React, { memo, VFC } from "react";
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
import { Paths } from "../../routes/Paths";

// eslint-disable-next-line react/display-name
export const PrimaryConfirm: VFC = memo(() => {
  const { themeState, periodState, isSelectedAll } = useCheckSelected();
  const [loading] = useRecoilState(loadingState);
  console.log("PrimaryConfirmコンポーネント");
  if (isSelectedAll()) {
    return loading ? (
      <FlexWrapper>
        <div>
          <FlexWrapper>
            <BallTriangle color="#00BFFF" height={90} width={90} />
          </FlexWrapper>
          <SP>Now Generating...</SP>
        </div>
      </FlexWrapper>
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
});

// eslint-disable-next-line react/display-name
export const SecondaryConfirm: VFC = memo(() => {
  console.log("SecondaryConfirmコンポーネント");
  const { isSelectedAll } = useCheckSelected();
  const [loading] = useRecoilState(loadingState);
  const { onClickBack } = useButton();
  const paths = Paths();

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
          <WhiteButton onClickButton={() => onClickBack(paths.back)}>
            BACK
          </WhiteButton>
          <NavyButton>GENERATE</NavyButton>
        </Operation>
      </>
    );
  } else {
    return (
      <Operation>
        <WhiteButton onClickButton={() => onClickBack(paths.back)}>
          BACK
        </WhiteButton>
      </Operation>
    );
  }
});

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
