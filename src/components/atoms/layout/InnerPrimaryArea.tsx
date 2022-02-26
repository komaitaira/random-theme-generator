import React, { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};
// eslint-disable-next-line react/display-name
export const InnerPrimaryArea: VFC<Props> = memo((props) => {
  const { children } = props;
  console.log("\u001b[32m" + "InnerPrimaryAreaコンポーネント");
  return <SInnerPrimaryArea>{children}</SInnerPrimaryArea>;
});

const SInnerPrimaryArea = styled.div`
  height: 95%;
`;
