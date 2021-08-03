import styled from "styled-components";
import colors from "../../../colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  padding-top: 2.5rem;
  width: 100%;
`;

export const SwitchButton = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 2rem;
  position: relative;
  width: 8rem;
`;

export const Line = styled.div`
  border: solid ${colors.black} 0.6rem;
  width: 5rem;
`;

export const Circle = styled.div`
  background-color: ${colors.blue};
  border: solid ${colors.black} 0.3rem;
  border-radius: 50%;
  height: 2.5rem;
  position: absolute;
  width: 2.5rem;
`;

export const Icon = styled.span`
  font-size: 1.2rem;
`;
