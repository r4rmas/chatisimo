import React from "react";
import { Container, Subcontainer, White } from "./styles";
import { Maxwidth } from "../../styles";

const Footer = () => {
  return (
    <Container>
      <Maxwidth>
        <Subcontainer>
          <a href="https://raularmas.com">
            <White>RAUL ARMAS </White>{" "}
          </a>
          <White>· </White>
          <White>LEONARDO BENITEZ </White>
          <White>· </White>
          <White>JARED VILLAPRADO</White>
          <White>· </White>
          <White>JOSE CEDEÑO</White>
        </Subcontainer>
      </Maxwidth>
    </Container>
  );
};

export default Footer;
