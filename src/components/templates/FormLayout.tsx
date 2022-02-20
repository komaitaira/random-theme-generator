import React, { ReactNode, VFC } from "react";
import { SecondaryArea } from "../atoms/layout/SecondaryArea";
import { InnerPrimaryArea } from "../atoms/layout/InnerPrimaryArea";
import { PrimaryArea } from "../atoms/layout/PrimaryArea";
import { Wave } from "../atoms/svg/Wave";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import styled from "styled-components";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useButton } from "../../hooks/useButton";

type Props = {
  PrimaryContent?: ReactNode;
  SecondaryContent?: ReactNode;
};

type Select = {
  theme: string;
  period: string;
};

export const FormLayout: VFC<Props> = (props) => {
  const { onClickNext } = useButton();
  const { PrimaryContent, SecondaryContent } = props;
  console.log("FormLayoutコンポーネント");
  const methods = useForm<Select>();
  console.log(methods.formState.errors.theme);
  const onSubmit: SubmitHandler<Select> = (data) => {
    console.log(data);
    console.log(methods.formState.errors);
    if (
      !methods.formState.errors.theme &&
      /http:\/\/localhost:3000\/$/.test(location.href)
    ) {
      onClickNext("/period");
    } else if (
      !methods.formState.errors.period &&
      /\/period$/.test(location.href)
    ) {
      onClickNext("/confirm");
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PrimaryArea>
          <InnerPrimaryArea>
            <FlexWrapper>
              <ExtendWrapper>
                {PrimaryContent}
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
        <SecondaryArea>{SecondaryContent}</SecondaryArea>
      </form>
    </FormProvider>
  );
};

const ExtendWrapper = styled(SWrapper)`
  height: 32vh !important;
`;

const SErrorMessage = styled.p`
  color: #ff9a00;
`;
