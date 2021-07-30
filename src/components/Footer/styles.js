import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.div`
  align-items: center;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

export const Blue = styled.span`
  color: ${colors.blue};
  cursor: pointer;
  margin: 0 0.2rem;

  &:hover {
    color: ${colors.white};
  }
`;
