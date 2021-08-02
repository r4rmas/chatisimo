import React, { useState, useContext } from "react";
import Context from "../../context";
import { logIn } from "../../context/reducer/actions";
import { post } from "../../requests";
import { Black, Container } from "./styles";
import { Page, Form, Label, Input, Error, ButtonBlue } from "../../styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [, dispatch] = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/login", {
      username: username,
      password: password,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) setError(true);
        else {
          dispatch(logIn(data.token));
          // location.reload();
        }
      });
  };

  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <Black>ENTRAR</Black>
        <Label>Usuario:</Label>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Label>Contraseña:</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        {error && <Error>ERROR: USUARIO O CONTRASEÑA INCORRECTA</Error>}
        <Container>
          <ButtonBlue>ENTRAR</ButtonBlue>
        </Container>
      </Form>
    </Page>
  );
};

export default Login;
