import styled from "styled-components";
export const BaseButton = styled.button`
  border-radius: 6px;
  max-width: 250px;
  width: 100%;
  height: 52px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
