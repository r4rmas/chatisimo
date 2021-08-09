import React, { useContext } from "react";
import Context from "../../../context";
import { Container, Header, Body, Sender, Message, Icon } from "./styles";

const Chat = () => {
  const [{ chatActive }] = useContext(Context);

  return (
    <Container>
      <Header>{chatActive}</Header>
      <Body></Body>
      <Sender>
        <Message placeholder="Escribe un mensaje" rows="1" />
        <Icon>
          <i class="fas fa-paper-plane"></i>
        </Icon>
      </Sender>
    </Container>
  );
};

export default Chat;
