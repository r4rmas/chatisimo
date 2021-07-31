import React from "react";
import { Container, Description, Black } from "./styles";
import { Page } from "../../styles";

const About = () => {
  return (
    <Page>
      <Container>
        <Black>SOBRE NOSOTROS</Black>
        <Description>
          Chatisimo es un sistema de chat Open Source que ha sido desarrollado
          para brindar a sus usuarios una menor carga de datos gracias a su
          estructura minimalista. Su sistema de protección está basado en no
          requerir ningún tipo de información ni almacenar cookies.
        </Description>
      </Container>
    </Page>
  );
};

export default About;
