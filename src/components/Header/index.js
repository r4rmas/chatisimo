import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Blue, White } from "./styles";
import { Maxwidth } from "../../styles";

const Header = () => {
  return (
    <Container>
      <Maxwidth>
        <Logo>
          <Link to="/">
            <Blue>CHAT</Blue>
            <White>ISIMO</White>
          </Link>
        </Logo>
      </Maxwidth>
    </Container>
  );
};

export default Header;
