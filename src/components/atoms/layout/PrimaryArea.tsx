import React, { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};
// eslint-disable-next-line react/display-name
export const PrimaryArea: VFC<Props> = memo((props) => {
  const { children } = props;
  return <SPrimaryArea>{children}</SPrimaryArea>;
});

const SPrimaryArea = styled.div`
  background-color: #092856;
  height: 60%;
`;
