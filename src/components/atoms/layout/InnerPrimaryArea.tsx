import React, { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};
// eslint-disable-next-line react/display-name
export const InnerPrimaryArea: VFC<Props> = memo((props) => {
  const { children } = props;
  return <SInnerPrimaryArea>{children}</SInnerPrimaryArea>;
});

const SInnerPrimaryArea = styled.div`
  height: 95%;
`;
