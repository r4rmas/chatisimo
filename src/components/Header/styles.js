import styled from "styled-components";
import colors from "../../colors";
import screens from "../../screens";

export const Container = styled.header`
  align-items: center;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  width: 100%;
`;

export const Subcontainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
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

export const Navigator = styled.nav``;

export const Endpoint = styled.span`
  display: none;
  color: ${colors.white};
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 2rem;

  @media screen and (min-width: ${screens.tablet}px) {
    display: inline;
  }
`;

export const ButtonBlue = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 1.4rem;
`;

export const ButtonLogOut = styled.span`
  color: ${colors.white};
  cursor: pointer;
  margin-left: 8rem;
  &:hover {
    color: ${colors.blue};
  }
`;
