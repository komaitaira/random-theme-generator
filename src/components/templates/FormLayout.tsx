import React, { memo, useCallback, useEffect, VFC } from "react";
import { SecondaryArea } from "../atoms/layout/SecondaryArea";
import { InnerPrimaryArea } from "../atoms/layout/InnerPrimaryArea";
import { PrimaryArea } from "../atoms/layout/PrimaryArea";
import { Wave } from "../atoms/svg/Wave";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import styled from "styled-components";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useButton } from "../../hooks/useButton";
import { Outlet } from "react-router-dom";
import { Paths } from "../../routes/Paths";

type Select = {
  theme: string;
  period: string;
};

// eslint-disable-next-line react/display-name
export const FormLayout: VFC = memo(() => {
  console.log("\u001b[36m" + "FormLayoutコンポーネント");
  const { onClickNext } = useButton();
  const methods = useForm<Select>();

  const paths = Paths();
  const secondaryComponent = paths && paths.component;
  const vw = window.innerWidth;
  const moveHeight = document.documentElement.clientHeight + "px";

  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", () => {
      if (vw === window.innerWidth) {
        return;
      }
      const formLayout = document.forms[0];
      if (formLayout) {
        formLayout.style.height = document.documentElement.clientHeight + "px";
        setFillHeight();
      }
    });
  }, [vw]);

  const onSubmit: SubmitHandler<Select> = useCallback(() => {
    if (Object.keys(methods.formState.errors).length === 0 && paths) {
      paths.current.match(location.pathname) && onClickNext(paths.next);
    }
  }, [paths]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ height: moveHeight }}
      >
        <PrimaryArea>
          <InnerPrimaryArea>
            <FlexWrapper>
              <ExtendWrapper>
                <Outlet />
                {methods.formState.errors.theme && (
                  <SErrorMessage>*必須項目です。</SErrorMessage>
                )}
                {methods.formState.errors.period && (
                  <SErrorMessage>*過去の日付は選択できません。</SErrorMessage>
                )}
              </ExtendWrapper>
            </FlexWrapper>
          </InnerPrimaryArea>
          <Wave />
        </PrimaryArea>
        <SecondaryArea>{secondaryComponent}</SecondaryArea>
      </form>
    </FormProvider>
  );
});

const ExtendWrapper = styled(SWrapper)`
  height: 32vh !important;
`;

const SErrorMessage = styled.p`
  color: #ff9a00;
`;
