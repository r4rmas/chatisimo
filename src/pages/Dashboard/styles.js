import styled from "styled-components";
import screens from "../../screens";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  height: 100%;
  max-width: ${screens.desktop}px;
  width: 100%;
`;
