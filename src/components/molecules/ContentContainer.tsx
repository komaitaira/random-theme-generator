import React, { ReactNode, VFC } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { pageSgate } from "../../store/pageState";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
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
    <FlexWrapper>
      <ExtendWrapper>
        <SDescription>{descriptionValue["theme"]}</SDescription>
        <SProgress>{currentPageValue["theme"]}/3</SProgress>
      </ExtendWrapper>
    </FlexWrapper>
  );
};

const ExtendWrapper = styled(SWrapper)`
  transform: translateY(-6vh);
`;

const SDescription = styled.h3`
  color: #13386f;
`;

const SProgress = styled.h4`
  color: #13386f;
`;
