import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { ThemeSelect } from "../molecules/selectboxes/ThemeSelect";
import { Operation } from "../organisms/Operation";
import styled from "styled-components";
import { WhiteButton } from "../molecules/buttons/WhiteButton";
import { OrangeButton } from "../molecules/buttons/OrangeButton";
import { useButton } from "../../hooks/useButton";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";

export const PrimaryTheme: VFC = () => {
  console.log("PrimaryThemeコンポーネント");
  return (
    <div>
      <Title />
      <ThemeSelect />
    </div>
  );
};

export const SecondaryTheme: VFC = () => {
  console.log("SecondaryThemeコンポーネント");
  const { onClickBack } = useButton();
  return (
    <>
      <ExtendWrapper>
        <FlexWrapper>
          <div>
            <SDescription>表示するテーマ数を決めましょう</SDescription>
            <SProgress>1/3</SProgress>
          </div>
        </FlexWrapper>
      </ExtendWrapper>
      <Operation>
        <WhiteButton onClickButton={() => onClickBack("/")}>BACK</WhiteButton>
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
