import React, { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const InnerPrimaryArea: VFC<Props> = (props) => {
  const { children } = props;
  console.log("InnerPrimaryAreaコンポーネント");
  return <SInnerPrimaryArea>{children}</SInnerPrimaryArea>;
};

const SInnerPrimaryArea = styled.div`
  height: 60vh;
`;
