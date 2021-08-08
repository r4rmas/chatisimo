import React from "react";
import { Container } from "./styles.js";

const Friend = ({ user }) => {
  return (
    <Container>
      <span>{user}</span>
    </Container>
  );
};

export default Friend;
