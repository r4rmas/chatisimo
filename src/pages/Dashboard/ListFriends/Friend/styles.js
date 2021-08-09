import styled from "styled-components";
import colors from "../../../../colors";

export const Container = styled.div`
  align-items: baseline;
  border-bottom: solid ${colors.black} 0.1rem;
  cursor: pointer;
  display: flex;
  font-size: 1.8rem;
  justify-content: space-between;
  padding: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

export const Icon = styled.span`
  font-size: 1.4rem;
`;
