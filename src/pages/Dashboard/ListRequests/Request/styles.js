import styled from "styled-components";
import colors from "../../../../colors";

export const Container = styled.div`
  align-items: center;
  border-bottom: solid ${colors.black} 0.1rem;
  display: flex;
  font-size: 1.8rem;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`;

export const Accept = styled.button`
  color: ${colors.white};
  background-color: ${colors.blue};
  padding: 0.5rem;
  width: auto;
`;

export const Decline = styled.button`
  color: ${colors.white};
  background-color: ${colors.red};
  margin-right: 1rem;
  padding: 0.5rem;
  width: auto;
`;
