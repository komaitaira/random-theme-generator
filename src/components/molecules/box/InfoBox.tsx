import styled from "styled-components";
import { SWrapper } from "../../atoms/wrapper/Wrapper";

export const InfoBox = styled(SWrapper)`
  background-color: #fff;
  border-radius: 16px;
  border: 5px solid #ddd;
  width: 85%;
  max-width: 880px;
  max-height: 56vh;
  overflow-y: scroll;
  margin: auto;
  @media screen and (max-height: 800px) {
    max-height: 45vh;
  }
`;
