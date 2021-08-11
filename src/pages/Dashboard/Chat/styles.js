import styled from "styled-components";
import colors from "../../../colors";

export const Container = styled.div`
  border-left: dotted black 0.2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
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
  padding: 1rem 0;
`;
