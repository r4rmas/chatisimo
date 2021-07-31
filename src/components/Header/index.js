import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Subcontainer,
  Logo,
  Blue,
  White,
  Navigator,
  Endpoint,
  ButtonBlue,
} from "./styles";
import { Maxwidth } from "../../styles";

const Header = () => {
  return (
    <Container>
      <Maxwidth>
        <Subcontainer>
          <Logo>
            <Link to="/">
              <Blue>CHAT</Blue>
              <White>ISIMO</White>
            </Link>
          </Logo>
          <Navigator>
            <Link to="/about">
              <Endpoint>SOBRE NOSOTROS</Endpoint>
            </Link>
            <Link to="/signin">
              <ButtonBlue style={{ padding: ".6rem", width: "9rem" }}>
                ENTRAR
              </ButtonBlue>
            </Link>
          </Navigator>
        </Subcontainer>
      </Maxwidth>
    </Container>
  );
};

export default Header;
