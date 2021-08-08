import React from "react";
import { post } from "../../../../requests";
import { Container, Accept, Decline } from "./styles";

const Request = ({ requester }) => {
  const accept = () => {
    post(
      "/accept/request",
      {
        username: requester,
      },
      { "auth-token": localStorage.getItem("token") }
    );
  };

  const decline = () => {};

  return (
    <Container>
      <span>{requester}</span>
      <span>
        <Decline>Rechazar</Decline>
        <Accept onClick={() => accept()}>Aceptar</Accept>
      </span>
    </Container>
  );
};

export default Request;
