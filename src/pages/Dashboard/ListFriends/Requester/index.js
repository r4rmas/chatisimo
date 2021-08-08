import React, { useState } from "react";
import { post } from "../../../../requests";
import {
  Form,
  Input,
  Button,
  Container,
  Message,
  Success,
  Error,
} from "./styles";

const Requester = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  {
    /* PENDIENTE: RECIBIR MENSAJE DE EXITO O DE ERROR EN CASO QUE YA SE HAYA ENVIADO UNA SOLICITUD ANTERIORMENTE A ESE USUARIO O QUE EL USUARIO NO EXISTA*/
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    post(
      "/send/request",
      { username: username },
      { "auth-token": localStorage.getItem("token") }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setSuccess("");
        } else {
          setSuccess(data.success);
          setError("");
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de usuario"
        />
        <Button>Enviar solicitud</Button>
      </Container>
      <Message>
        {error ? <Error>{error}</Error> : <Success>{success}</Success>}
      </Message>
    </Form>
  );
};

export default Requester;
