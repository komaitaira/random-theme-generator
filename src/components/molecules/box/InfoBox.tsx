import styled from "styled-components";
import { SWrapper } from "../../atoms/wrapper/Wrapper";

export const InfoBox = styled(SWrapper)`
  background-color: #fff;
  border-radius: 16px;
  border: 5px solid #ddd;
  width: 85%;
  max-width: 880px;
  max-height: 60vh;
  overflow-y: scroll;
  margin: auto;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 600px) {
    max-height: 45vh;
  }
`;
