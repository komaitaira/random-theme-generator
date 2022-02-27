import React, { memo, ReactNode, VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "../../atoms/button/BaseButton";

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
export const NavyButton: VFC<Props> = memo((props) => {
  console.log("NavyButton");
  const { children } = props;
  return <SButton type="submit">{children}</SButton>;
});

const SButton = styled(BaseButton)`
  background-color: #092856;
  color: #f6aa64;
  margin-left: 1vw;
  margin-right: 2vw;
`;
