import React, { useState } from "react";
import { Form, Input, Button } from "./styles";
import { post } from "../../../../requests";

const Requester = () => {
  const [username, setUsername] = useState("");

  {
    /* PENDIENTE: RECIBIR MENSAJE DE EXITO O DE ERROR EN CASO QUE YA SE HAYA ENVIADO UNA SOLICITUD ANTERIORMENTE A ESE USUARIO*/
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    post(
      "/send/request",
      { username: username },
      { "auth-token": localStorage.getItem("token") }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nombre de usuario"
      />
      <Button>Enviar solicitud</Button>
    </Form>
  );
};

export default Requester;
