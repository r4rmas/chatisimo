import React from "react";
import { Black, Container } from "./styles";
import { Page, Form, Label, Input, ButtonBlue } from "../../styles";

const Login = () => {
  return (
    <Page>
      <Form>
        <Black>ENTRAR</Black>
        <Label>Usuario:</Label>
        <Input required />
        <Label>Contraseña:</Label>
        <Input type="password" required />
        <Container>
          <ButtonBlue>ENTRAR</ButtonBlue>
        </Container>
      </Form>
    </Page>
  );
};

export default Login;
