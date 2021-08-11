import React from "react";
import { Container, Message } from "./styles";

const Received = ({ message }) => {
  return (
    <Container>
      <Message>
        <span>{message}</span>
      </Message>
    </Container>
  );
};

export default Received;
