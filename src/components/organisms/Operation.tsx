import React, { VFC } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pageState } from "../../store/pageState";
import { SFlexWrapper } from "../atoms/wrapper/FlexWrapper";
import {
  SBackButton,
  SNextButton,
  SGenerateButton,
} from "../atoms/button/Buttons";

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
          description: "表示するテーマ数を選択してください",
        });
        navigate("/");
        break;
      case 3:
        setPageInfo({
          currentPage: 2,
          description: "撮影期限を選択してください",
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
          description: "撮影期限を選択してください",
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
      <SBackButton onClick={onClickBack}>BACK</SBackButton>
      {PageNow === 3 ? (
        <SGenerateButton onClick={onClickGenerate}>GENERATE</SGenerateButton>
      ) : (
        <SNextButton onClick={onClickNext}>NEXT</SNextButton>
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
