import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.div`
  align-items: center;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  width: 100%;
`;

export const Subcontainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Logo = styled.h1``;

export const Blue = styled.span`
  color: ${colors.blue};
  font-family: "Roboto";
  font-size: 2rem;
  font-weight: bolder;
`;

export const White = styled.span`
  color: ${colors.white};
  font-family: "Roboto";
  font-size: 2rem;
  font-weight: bolder;
`;

export const Navigator = styled.div``;

export const Endpoint = styled.span`
  color: ${colors.white};
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 2rem;
`;

export const ButtonBlue = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 1.4rem;
`;
