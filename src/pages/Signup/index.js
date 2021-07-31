import React from "react";
import { Black, Container } from "./styles";
import { Page, Form, Label, Input, ButtonBlue } from "../../styles";

const Signup = () => {
  return (
    <Page>
      <Form>
        <Black>UNIRSE</Black>
        <Label>Nuevo usuario:</Label>
        <Input required />
        <Label>Nueva contraseña:</Label>
        <Input type="password" required />
        <Label>Repita la contraseña:</Label>
        <Input type="password" required />
        <Container>
          <ButtonBlue>UNIRSE</ButtonBlue>
        </Container>
      </Form>
    </Page>
  );
};

export default Signup;
