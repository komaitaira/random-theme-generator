import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { Operation } from "../organisms/Operation";
import styled from "styled-components";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import { WhiteButton } from "../molecules/buttons/WhiteButton";
import { OrangeButton } from "../molecules/buttons/OrangeButton";
import { useButton } from "../../hooks/useButton";
import { PeriodDatePicker } from "../molecules/datepicker/PeriodDatePicker";

export const PrimaryPeriod: VFC = () => {
  console.log("PrimaryPeriodコンポーネント");
  return (
    <>
      <Title />
      <PeriodDatePicker />
    </>
  );
};

export const SecondaryPeriod: VFC = () => {
  console.log("SecondaryPeriodコンポーネント");
  const { onClickBack } = useButton();
  return (
    <>
      <ExtendWrapper>
        <SDiv>
          <SDescription>撮影期限を決めましょう</SDescription>
          <SProgress>2/3</SProgress>
        </SDiv>
      </ExtendWrapper>
      <Operation>
        <WhiteButton onClickButton={() => onClickBack("/")}>BACK</WhiteButton>
        <OrangeButton>NEXT</OrangeButton>
      </Operation>
    </>
  );
};

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
