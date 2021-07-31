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
} from "./styles";
import { Maxwidth, ButtonBlue } from "../../styles";

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
            <Link to="/">
              <Endpoint style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                SOBRE NOSOTROS
              </Endpoint>
            </Link>
            <Link to="/">
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
