import React from "react";
import { Black, Container } from "./styles";
import { Page, Form, Label, Input, ButtonBlue } from "../../styles";

const Signin = () => {
  return (
    <Page>
      <Form>
        <Black>UNIRSE</Black>
        <Label required>Usuario:</Label>
        <Input />
        <Label>Contraseña:</Label>
        <Input type="password" required />
        <Container>
          <ButtonBlue>ENTRAR</ButtonBlue>
        </Container>
      </Form>
    </Page>
  );
};

export default Signin;
