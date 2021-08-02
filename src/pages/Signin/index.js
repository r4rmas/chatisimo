import React, { useState, useContext } from "react";
import Context from "../../context";
import { logIn } from "../../context/reducer/actions";
import { post } from "../../requests";
import { Black, Container } from "./styles";
import {
  Page,
  Form,
  Label,
  Input,
  Center,
  Error,
  ButtonBlue,
} from "../../styles";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [, dispatch] = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    password === passwordConfirmation
      ? post("/signin", {
          username: username,
          password: password,
        })
          .then((response) => response.json())
          .then((data) => {
            data.error ? setErrorUsername(true) : dispatch(logIn(data.token));
          })
      : setErrorPassword(true);
  };

  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <Black>UNIRSE</Black>
        <Label>Nuevo usuario:</Label>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Label>Nueva contraseña:</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <Label>Repita la contraseña:</Label>
        <Input
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          type="password"
          required
        />
        {errorUsername && (
          <Center>
            <Error>ERROR: EL USUARIO YA EXISTE</Error>
          </Center>
        )}
        {errorPassword && (
          <Center>
            <Error>ERROR: CONTRASEÑAS NO COINCIDEN</Error>
          </Center>
        )}
        <Container>
          <ButtonBlue>UNIRSE</ButtonBlue>
        </Container>
      </Form>
    </Page>
  );
};

export default Signin;
