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
          Somos un sistema de chat minimalista y privado. Nadie sabrá que estás
          en línea, te lo aseguramos. No necesitas correo eléctronico ni número
          celular para unirte.
        </Description>
        <Subcontainer>
          <Link to="/about">
            <Pressabe>Conocer más {">"}</Pressabe>
          </Link>
          <Link to="/signin">
            <ButtonBlue>Unirse</ButtonBlue>
          </Link>
        </Subcontainer>
      </Container>
    </Page>
  );
};

export default Home;
