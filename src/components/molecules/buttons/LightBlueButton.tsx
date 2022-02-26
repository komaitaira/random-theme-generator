import React, { memo, MouseEventHandler, ReactNode, VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "../../atoms/button/BaseButton";

type Props = {
  children: ReactNode;
  onClickButton: MouseEventHandler<HTMLButtonElement>;
};
// eslint-disable-next-line react/display-name
export const LightBlueButton: VFC<Props> = memo((props) => {
  console.log("LightBlueButton");
  const { children, onClickButton } = props;
  return <SButton onClick={onClickButton}>{children}</SButton>;
});

const SButton = styled(BaseButton)`
  background-color: rgb(29, 155, 240);
  color: #fff;
  border: 1px solid rgb(29, 155, 240);
  margin-left: 1vw;
  margin-right: 2vw;
`;
