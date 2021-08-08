import styled from "styled-components";
import colors from "../../../colors";

export const Tooltip = styled.span`
  background-color: ${colors.gray};
  color: ${colors.white};
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  width: 100%;
`;
