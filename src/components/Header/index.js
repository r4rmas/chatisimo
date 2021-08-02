import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context";
import { logOut } from "../../context/reducer/actions";
import {
  Container,
  Subcontainer,
  Logo,
  Blue,
  White,
  Navigator,
  Endpoint,
  ButtonBlue,
  ButtonLogOut,
} from "./styles";
import { Maxwidth } from "../../styles";

const Header = () => {
  const [{ loggedIn }, dispatch] = useContext(Context);

  const handleLogOut = () => {
    dispatch(logOut());
    //si es necesario usar el reload entonces el dispatch no esta funcionando
    //location.reload();
  };

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
            {!loggedIn ? (
              <>
                <Link to="/about">
                  <Endpoint>SOBRE NOSOTROS</Endpoint>
                </Link>
                <Link to="/login">
                  <ButtonBlue style={{ padding: ".6rem", width: "9rem" }}>
                    ENTRAR
                  </ButtonBlue>
                </Link>
              </>
            ) : (
              <>
                <White>USUARIO</White>
                <ButtonLogOut onClick={handleLogOut}>
                  <i className="fas fa-2x fa-sign-out-alt"></i>
                </ButtonLogOut>
              </>
            )}
          </Navigator>
        </Subcontainer>
      </Maxwidth>
    </Container>
  );
};

export default Header;
