import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { Operation } from "../organisms/Operation";
import styled from "styled-components";
import { WhiteButton } from "../molecules/buttons/WhiteButton";
import { OrangeButton } from "../molecules/buttons/OrangeButton";
import { useButton } from "../../hooks/useButton";
import { PeriodDatePicker } from "../molecules/datepicker/PeriodDatePicker";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { Paths } from "../../routes/Paths";

export const PrimaryPeriod: VFC = () => {
  console.log("PrimaryPeriodコンポーネント");
  return (
    <div>
      <Title />
      <PeriodDatePicker />
    </div>
  );
};

export const SecondaryPeriod: VFC = () => {
  console.log("SecondaryPeriodコンポーネント");
  const { onClickBack } = useButton();
  const paths = Paths();

  return (
    <>
      <ExtendWrapper>
        <FlexWrapper>
          <div>
            <SDescription>撮影期限を決めましょう</SDescription>
            <SProgress>2/3</SProgress>
          </div>
        </FlexWrapper>
      </ExtendWrapper>
      <Operation>
        <WhiteButton onClickButton={() => onClickBack(paths.back)}>
          BACK
        </WhiteButton>
        <OrangeButton>NEXT</OrangeButton>
      </Operation>
    </>
  );
};

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
