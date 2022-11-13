import React, { memo, VFC } from "react";
import styled from "styled-components";

// eslint-disable-next-line react/display-name
export const Wave: VFC = memo(() => {
  return (
    <SSvg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 26 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="#FFE4C5" />
      </g>
    </SSvg>
  );
});

const SSvg = styled.svg`
  width: 100%;
  height: 5%;
  margin-bottom: -7px; /*Fix for safari gap*/
`;
