import styled from "styled-components";
import colors from "../../../../colors";

export const Container = styled.div`
  display: flex;
  margin-bottom: 0.3rem;
  width: 100%;
`;

export const Message = styled.div`
  background-color: ${colors.gray};
  border-radius: 0.5rem;
  color: ${colors.white};
  padding: 0.5rem 1rem;
`;
