import React from "react";
import { BackButton } from "./components/atoms/button/BackButton";
import { NextButton } from "./components/atoms/button/NextButton";
import { Wrapper } from "./components/molecules/wrapper/Wrapper";

export function App() {
  return (
    <Wrapper>
      <BackButton>BACK</BackButton>
      <NextButton>NEXT</NextButton>
    </Wrapper>
  );
}
