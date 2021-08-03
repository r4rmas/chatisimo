import React, { useState } from "react";
import { Form, Input, Button } from "./styles";

const Requester = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
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
