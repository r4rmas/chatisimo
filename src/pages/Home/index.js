import React from "react";
import { Link } from "react-router-dom";
import { Black, Description, Container, Subcontainer } from "./styles";
import { Page, Pressabe, ButtonBlue } from "../../styles";

const Home = () => {
  return (
    <Page>
      <Container>
        <Black>BIENVENIDO</Black>
        <Description>
          Somos un sistema de chat minimalista y privado, no necesitas un número
          celular, ni nadie sabrá que estás en línea, lo único que necesitas es
          un correo válido.
        </Description>
        <Subcontainer>
          <Pressabe>Conocer más {">"}</Pressabe>
          <Link to="/signin">
            <ButtonBlue>Unirse</ButtonBlue>
          </Link>
        </Subcontainer>
      </Container>
    </Page>
  );
};

export default Home;
