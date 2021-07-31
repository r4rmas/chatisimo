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
            Somos un sistema de chat minimalista y privado, no necesitas un
            correo electrónico ni número celular.
          </span>
          <span>Nadie sabrá que estás en línea, te lo aseguramos.</span>
        </Description>
        <Subcontainer>
          <Pressabe>Conocer más {">"}</Pressabe>
          <Link to="/signup">
            <ButtonBlue>Unirse</ButtonBlue>
          </Link>
        </Subcontainer>
      </Container>
    </Page>
  );
};

export default Home;
