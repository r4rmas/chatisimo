import styled from "styled-components";
import colors from "../../../colors";

export const Container = styled.div`
  border-left: dotted black 0.2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 1rem;
  width: 100%;
`;

export const Header = styled.div`
  align-items: center;
  background-color: ${colors.gray};
  border-radius: 0 0 0.5rem 0.5rem;
  color: ${colors.white};
  display: flex;
  font-size: 1.8rem;
  font-weight: bold;
  height: 4rem;
  justify-content: center;
  padding: 0 2rem;
`;

export const Body = styled.div`
  height: 100%;
`;

export const Sender = styled.div`
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
