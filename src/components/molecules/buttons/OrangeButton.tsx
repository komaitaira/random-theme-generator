import React, { memo, ReactNode, VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "../../atoms/button/BaseButton";

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
export const OrangeButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return <SButton type="submit">{children}</SButton>;
});

const SButton = styled(BaseButton)`
  background-color: #f6aa64;
  color: #fff;
  margin-left: 1vw;
  margin-right: 2vw;
`;
