import styled from "styled-components";
import colors from "../../../../colors";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.3rem;
  width: 100%;
`;

export const Message = styled.div`
  background-color: ${colors.blue};
  border-radius: 0.5rem;
  color: ${colors.white};
  font-weight: bold;
  padding: 0.5rem 1rem;
`;
