import React from "react";
import { BackButton } from "./components/atoms/button/BackButton";
import { NextButton } from "./components/atoms/button/NextButton";
import { Wave } from "./components/atoms/wave/wave";
import { FlexWrapper } from "./components/molecules/wrapper/FlexWrapper";
import { Title } from "./components/templates/Title";

export function App() {
  return (
    <>
      <div className="main">
        <div className="inner-main">
          <FlexWrapper>
            <Title />
          </FlexWrapper>
        </div>
        <Wave />
      </div>
      <div className="content">
        <FlexWrapper>
          <BackButton>BACK</BackButton>
          <NextButton>NEXT</NextButton>
        </FlexWrapper>
      </div>
    </>
  );
}
