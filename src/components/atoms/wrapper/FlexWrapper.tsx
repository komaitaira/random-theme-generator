import React, { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const FlexWrapper: VFC<Props> = (props) => {
  const { children } = props;
  console.log("FlexWrapperコンポーネント");
  return <SFlexWrapper>{children}</SFlexWrapper>;
};

export const SFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;
