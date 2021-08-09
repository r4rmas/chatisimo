import React from "react";
import { Container, Icon } from "./styles.js";

const Friend = ({ user }) => {
  return (
    <Container>
      <span>{user}</span>
      <Icon>
        <i className="fas fa-chevron-right"></i>
      </Icon>
    </Container>
  );
};

export default Friend;
