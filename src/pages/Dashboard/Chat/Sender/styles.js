import styled from "styled-components";
import colors from "../../../../colors";

export const Container = styled.div`
  background-color: ${colors.gray};
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  padding: 1rem 2rem;
  height: 5rem;
`;

export const Message = styled.textarea`
  background-color: ${colors.white};
  border: none;
  border-radius: 0.2rem;
  font-family: "Lato";
  font-size: 1.6rem;
  height: 2.8rem;
  outline: none;
  overflow-y: hidden;
  margin-left: 1rem;
  padding: 0.5rem;
  width: 100%;
`;

export const Icon = styled.span`
  color: ${colors.blue};
  cursor: pointer;
  font-size: 2.3rem;
  margin-left: 2rem;
`;
