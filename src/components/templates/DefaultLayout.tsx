import React, { memo, ReactNode, VFC } from "react";
import { SecondaryArea } from "../atoms/layout/SecondaryArea";
import { InnerPrimaryArea } from "../atoms/layout/InnerPrimaryArea";
import { PrimaryArea } from "../atoms/layout/PrimaryArea";
import { Wave } from "../atoms/svg/Wave";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import styled from "styled-components";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { Outlet } from "react-router-dom";
import { Paths } from "../../routes/Paths";

type Props = {
  PrimaryContent?: ReactNode;
  SecondaryContent?: ReactNode;
};
// eslint-disable-next-line react/display-name
export const DefaultLayout: VFC<Props> = memo((props) => {
  const { PrimaryContent, SecondaryContent } = props;
  console.log("DefaultLayoutコンポーネント");

  const paths = Paths();
  const secondaryComponent = paths && paths.component;

  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const vw = window.innerWidth;
  const moveHeight = document.documentElement.clientHeight + "px";
  window.addEventListener("resize", () => {
    if (vw === window.innerWidth) {
      return;
    }
    const defaultLayout = document.getElementById("default-layout");
    if (defaultLayout) {
      defaultLayout.style.height = document.documentElement.clientHeight + "px";
      setFillHeight();
    }
  });

  return (
    <div id="default-layout" style={{ height: moveHeight }}>
      <PrimaryArea>
        <InnerPrimaryArea>
          <FlexWrapper>
            <Outlet />
          </FlexWrapper>
        </InnerPrimaryArea>
        <Wave />
      </PrimaryArea>
      <SecondaryArea>{secondaryComponent}</SecondaryArea>
    </div>
  );
});
