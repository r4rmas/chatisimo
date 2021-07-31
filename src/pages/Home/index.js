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
          <span>
            Somos un sistema de chat minimalista y privado. Nadie sabrá que
            estás en línea, te lo aseguramos. Libres de spywares. No necesitas
            correo eléctronico ni número celular para unirte.
          </span>
        </Description>
        <Subcontainer>
          <Link to="/about">
            <Pressabe>Conocer más {">"}</Pressabe>
          </Link>
          <Link to="/signup">
            <ButtonBlue>Unirse</ButtonBlue>
          </Link>
        </Subcontainer>
      </Container>
    </Page>
  );
};

export default Home;
