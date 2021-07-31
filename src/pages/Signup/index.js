import React from "react";
import { Black, Container } from "./styles";
import { Page, Form, Label, Input, ButtonBlue } from "../../styles";

const Signup = () => {
  return (
    <Page>
      <Form>
        <Black>UNIRSE</Black>
        <Label>Nuevo usuario:</Label>
        <Input />
        <Label>Nueva contraseña:</Label>
        <Input type="password" />
        <Label>Repita la contraseña:</Label>
        <Input type="password" />
        <Container>
          <ButtonBlue>UNIRSE</ButtonBlue>
        </Container>
      </Form>
    </Page>
  );
};

export default Signup;
