import React from "react";
import { Container, Message } from "./styles";

const Sent = ({ message }) => {
  return (
    <Container>
      <Message>
        <span>{message}</span>
      </Message>
    </Container>
  );
};

export default Sent;
