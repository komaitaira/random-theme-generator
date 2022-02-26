import React, { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const PrimaryArea: VFC<Props> = (props) => {
  const { children } = props;
  console.log("PrimaryAreaコンポーネント");
  return <SPrimaryArea>{children}</SPrimaryArea>;
};

const SPrimaryArea = styled.div`
  background-color: #092856;
  height: 60%;
`;
