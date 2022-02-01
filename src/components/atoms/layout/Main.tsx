import React, { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const Main: VFC<Props> = (props) => {
  const { children } = props;
  console.log("Mainコンポーネント");
  return <SMain>{children}</SMain>;
};

const SMain = styled.div`
  background-color: #092856;
  height: 65vh;
`;
