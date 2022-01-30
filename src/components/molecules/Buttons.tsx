import React, { VFC } from "react";
import styled from "styled-components";
import { BackButton } from "../atoms/button/BackButton";
import { NextButton } from "../atoms/button/NextButton";
import { SFlexWrapper } from "../atoms/wrapper/FlexWrapper";

export const Buttons: VFC = () => {
  return (
    <ExtendFlexWrapper>
      <BackButton>BACK</BackButton>
      <NextButton>NEXT</NextButton>
    </ExtendFlexWrapper>
  );
};

const ExtendFlexWrapper = styled(SFlexWrapper)`
  height: 10vh;
  background-color: #fff;
  bottom: 0;
  position: absolute;
  width: 100%;
`;
