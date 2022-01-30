import React, { VFC } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pageSgate } from "../../store/pageState";
import { SBackButton } from "../atoms/button/Buttons";
import { SNextButton } from "../atoms/button/Buttons";
import { SFlexWrapper } from "../atoms/wrapper/FlexWrapper";

export const Buttons: VFC = () => {
  const [pageInfo, setPageInfo] = useRecoilState(pageSgate);
  const navigate = useNavigate();
  console.log(pageInfo);
  const onClickBack = () => {
    switch (pageInfo.currentPage) {
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
      default:
        break;
    }
  };

  const onClickNext = () => {
    switch (pageInfo.currentPage) {
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
      default:
        break;
    }
  };
  return (
    <ExtendFlexWrapper>
      <SBackButton onClick={onClickBack}>BACK</SBackButton>
      <SNextButton onClick={onClickNext}>NEXT</SNextButton>
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
