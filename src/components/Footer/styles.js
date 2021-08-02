import styled from "styled-components";
import colors from "../../colors";
import screens from "../../screens";

export const Container = styled.footer`
  align-items: center;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%;
`;

export const Subcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: ${screens.desktop}px;
  width: 100%;
`;

export const Blue = styled.span`
  color: ${colors.blue};
  cursor: pointer;
  margin: 0 0.2rem;

  &:hover {
    color: ${colors.white};
  }
`;

export const White = styled.span`
  color: ${colors.white};
  cursor: pointer;
  margin: 0 0.2rem;

  &:hover {
    color: ${colors.blue};
  }
`;
