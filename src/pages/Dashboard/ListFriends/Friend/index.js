import React from "react";
import { Container } from "./styles.js";

const Friend = ({ user }) => {
  return (
    <Container>
      <span>{user}</span>
      <i class="fas fa-chevron-right"></i>
    </Container>
  );
};

export default Friend;
