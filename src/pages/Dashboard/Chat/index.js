import React, { useContext, useState, useEffect } from "react";
import Sender from "./Sender";
import Sent from "./Sent";
import Received from "./Received";
import Context from "../../../context";
import { Container, Header, Body } from "./styles";

const Chat = () => {
  const [history, setHistory] = useState([]);
  const [{ user, chatActive }] = useContext(Context);

  const getChat = () => {
    if (user.chats) {
      const chat = user.chats.filter((chat) => chat._id === chatActive);
      const chatExists = chat.length > 0;
      if (chatExists) {
        user.chats.map((chat) => {
          if (chat._id === chatActive) {
            setHistory(chat.history);
          }
        });
      }
    }
  };

  useEffect(getChat, [user]);

  return (
    <Container>
      <Header>{chatActive}</Header>
      <Body>
        {history.map((message) =>
          message._id === chatActive ? (
            <Received message={message.message} />
          ) : (
            <Sent message={message.message} />
          )
        )}
      </Body>
      <Sender />
    </Container>
  );
};

export default Chat;
