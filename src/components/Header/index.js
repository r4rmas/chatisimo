import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Blue, White } from "./styles";
import { Maxwidth } from "../../styles";

const Header = () => {
  return (
    <Container>
      <Maxwidth>
        <Link to="/">
          <Logo>
            <Blue>CHAT</Blue>
            <White>ISIMO</White>
          </Logo>
        </Link>
      </Maxwidth>
    </Container>
  );
};

export default Header;
