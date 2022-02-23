import React, { MouseEventHandler, ReactNode, VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "../../atoms/button/BaseButton";

type Props = {
  children: ReactNode;
  onClickButton: MouseEventHandler<HTMLButtonElement>;
};

export const LightBlueButton: VFC<Props> = (props) => {
  const { children, onClickButton } = props;
  return <SButton onClick={onClickButton}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: rgb(29, 155, 240);
  color: #fff;
  border: 1px solid rgb(29, 155, 240);
  margin-left: 1vw;
  margin-right: 2vw;
`;
