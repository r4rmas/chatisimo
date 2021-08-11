import React, { useState, useContext } from "react";
import Context from "../../../../context";
import { Container, Message, Icon } from "./styles";
import { post } from "../../../../requests";

const Sender = () => {
  const [message, setMessage] = useState("");
  const [{ chatActive }] = useContext(Context);

  const sendMessage = () => {
    post(
      "/send/message",
      { receiver: chatActive, message: message },
      { "auth-token": localStorage.getItem("token") }
    )
      .then((response) => response.json())
      .then((data) => setMessage(""));
  };

  return (
    <Container>
      <Message
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe un mensaje"
      />
      <Icon onClick={sendMessage}>
        <i className="fas fa-paper-plane"></i>
      </Icon>
    </Container>
  );
};

export default Sender;
