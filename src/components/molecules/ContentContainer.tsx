import React, { ReactNode, VFC } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { pageSgate } from "../../store/pageState";
import { SWrapper } from "../atoms/wrapper/Wrapper";

// 文言は後で変わるので、Propsはコメントアウトしておく
// type Props = {
//   children: ReactNode;
// };

export const ContentContainer: VFC = () => {
  // const { children } = props;
  const pageInfo = useRecoilValue(pageSgate);
  const currentPageValue = pageInfo.currentPage;
  const descriptionValue = pageInfo.description;
  return (
    <ExtendWrapper>
      <SDiv>
        <SDescription>{descriptionValue["theme"]}</SDescription>
        <SProgress>{currentPageValue["theme"]}/3</SProgress>
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
