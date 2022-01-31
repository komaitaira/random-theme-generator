import React, { VFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Page404: VFC = () => {
  console.log("Page404コンポーネント");
  return (
    <DefaultLayout
      innerMainChildren={
        <>
          <SMessage>
            404 Not Found.
            <br />
            ページが見つかりませんでした。
          </SMessage>
          <StyledLink to="/">Return to The Home?</StyledLink>
        </>
      }
    ></DefaultLayout>
  );
};

const SMessage = styled.p`
  color: #fff;
`;

const StyledLink = styled(Link)`
  color: #ffe4c5;
  text-decoration: none;
`;
