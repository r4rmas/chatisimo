import styled from "styled-components";
import colors from "../../../../colors";

export const Form = styled.form`
  padding: 1rem;
  padding-left: 0;
  padding-bottom: 0;
`;

export const Input = styled.input`
  margin-right: 1rem;
  padding: 0.1rem 0.4rem;
`;

export const Button = styled.button`
  color: ${colors.white};
  background-color: ${colors.blue};
  padding: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Message = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  height: 3rem;
  justify-content: center;
  width: 100%;
`;

export const Success = styled.span`
  color: ${colors.blue};
`;

export const Error = styled.span`
  color: ${colors.red};
`;
