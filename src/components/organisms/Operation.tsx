import React, { VFC } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pageState } from "../../store/pageState";
import { SFlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { NavyButton } from "../molecules/buttons/NavyButton";
import { WhiteButton } from "../molecules/buttons/WhiteButton";
import { OrangeButton } from "../molecules/buttons/OrangeButton";

export const Operation: VFC = () => {
  const [pageInfo, setPageInfo] = useRecoilState(pageState);
  console.log("Operationコンポーネント");
  const PageNow = pageInfo.currentPage;
  const navigate = useNavigate();
  console.log(pageInfo);
  const onClickBack = () => {
    console.log("onClickBack called.");
    switch (PageNow) {
      case 1:
        break;
      case 2:
        setPageInfo({
          currentPage: 1,
          description: "表示するテーマ数を決めましょう",
        });
        navigate("/");
        break;
      case 3:
        setPageInfo({
          currentPage: 2,
          description: "撮影期限を決めましょう",
        });
        navigate("/period");
        break;
    }
  };

  const onClickNext = () => {
    console.log("onClickNext called.");
    switch (PageNow) {
      case 1:
        setPageInfo({
          currentPage: 2,
          description: "撮影期限を決めましょう",
        });
        navigate("/period");
        break;
      case 2:
        setPageInfo({
          currentPage: 3,
          description: "この内容でテーマを生成します",
        });
        navigate("/confirm");
        break;
      case 3:
        setPageInfo({
          currentPage: 4,
          description: "テーマ生成中...",
        });
        break;
    }
  };

  const onClickGenerate = () => {
    alert("generate");
  };
  return (
    <ExtendFlexWrapper>
      <WhiteButton onClickButton={onClickBack}>BACK</WhiteButton>
      {PageNow === 3 ? (
        <NavyButton onClickButton={onClickGenerate}>GENERATE</NavyButton>
      ) : (
        <OrangeButton onClickButton={onClickNext}>NEXT</OrangeButton>
      )}
    </ExtendFlexWrapper>
  );
};

const ExtendFlexWrapper = styled(SFlexWrapper)`
  height: 10vh;
  background-color: #fff;
  bottom: 0;
  position: absolute;
  width: 100%;
`;
