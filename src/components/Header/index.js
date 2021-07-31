import React from "react";
import { Container, Logo, Blue, White } from "./styles";
import { Maxwidth } from "../../styles";

const Header = () => {
  return (
    <Container>
      <Maxwidth>
        <Logo>
          <Blue>CHAT</Blue>
          <White>ISIMO</White>
        </Logo>
      </Maxwidth>
    </Container>
  );
};

export default Header;
