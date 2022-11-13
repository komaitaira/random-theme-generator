import React, { memo, VFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/display-name
export const Page404: VFC = memo(() => {
  return (
    <div>
      <SMessage>
        404 Not Found.
        <br />
        ページが見つかりませんでした。
      </SMessage>
      <StyledLink to="/">Return to The Home?</StyledLink>
    </div>
  );
});

const SMessage = styled.p`
  color: #fff;
`;

const StyledLink = styled(Link)`
  color: #ffe4c5;
  text-decoration: none;
`;
