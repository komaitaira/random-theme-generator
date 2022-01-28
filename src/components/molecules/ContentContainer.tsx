import React, { ReactNode, VFC } from "react";
import styled from "styled-components";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { SWrapper } from "../atoms/wrapper/Wrapper";

// 文言は後で変わるので、Propsはコメントアウトしておく
// type Props = {
//   children: ReactNode;
// };

export const ContentContainer: VFC = () => {
  // const { children } = props;
  return (
    <FlexWrapper>
      <ExtendWrapper>
        <SDescription>表示するテーマ数を決めましょう</SDescription>
        <SProgress>1/3</SProgress>
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
