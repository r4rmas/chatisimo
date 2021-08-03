import styled from "styled-components";
import colors from "../../../../colors";

export const Form = styled.form`
  display: flex;
  padding: 1rem;
`;

export const Input = styled.input`
  margin-right: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  color: ${colors.white};
  background-color: ${colors.blue};
  padding: 0.5rem;
  width: 20rem;
`;
