import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context";
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
  const [{ loggedIn }] = useContext(Context);

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
          {/*HACER QUE SE MUESTRE EL NOMBRE DEL USUARIO EN VEZ DEL NAVEGADOR SI ESTA LOGUEADO*/}
          {!loggedIn ? (
            <Navigator>
              <Link to="/about">
                <Endpoint>SOBRE NOSOTROS</Endpoint>
              </Link>
              <Link to="/login">
                <ButtonBlue style={{ padding: ".6rem", width: "9rem" }}>
                  ENTRAR
                </ButtonBlue>
              </Link>
            </Navigator>
          ) : (
            <span>USUARIO</span>
          )}
        </Subcontainer>
      </Maxwidth>
    </Container>
  );
};

export default Header;
