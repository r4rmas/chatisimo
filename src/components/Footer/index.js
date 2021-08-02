import React from "react";
import { Container, Subcontainer, White } from "./styles";

const Footer = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Footer;
