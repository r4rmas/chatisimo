import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  line-height: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Black = styled.h2`
  color: ${colors.black};
  font-family: "Roboto";
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 1.8rem;
  text-align: center;
`;
