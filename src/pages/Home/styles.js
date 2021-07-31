import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 0 2rem;
  width: 100%;
`;

export const Subcontainer = styled.div``;

export const Black = styled.h2`
  color: ${colors.black};
  font-family: "Roboto";
  font-size: 2.4rem;
  font-weight: bolder;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  line-height: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
`;
