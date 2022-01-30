import React, { VFC } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { pageState } from "../../store/pageState";
import { SWrapper } from "../atoms/wrapper/Wrapper";

export const ContentContainer: VFC = () => {
  const pageInfo = useRecoilValue(pageState);
  const currentPageValue = pageInfo.currentPage;
  const descriptionValue = pageInfo.description;
  return (
    <ExtendWrapper>
      <SDiv>
        <SDescription>{descriptionValue}</SDescription>
        <SProgress>{currentPageValue}/3</SProgress>
      </SDiv>
    </ExtendWrapper>
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
