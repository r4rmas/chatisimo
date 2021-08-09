import React, { useContext } from "react";
import Context from "../../../../context";
import { setChat } from "../../../../context/reducer/actions";
import { Container, Icon } from "./styles.js";

const Friend = ({ user }) => {
  const [, dispatch] = useContext(Context);

  return (
    <Container onClick={() => dispatch(setChat(user))}>
      <span>{user}</span>
      <Icon>
        <i className="fas fa-chevron-right"></i>
      </Icon>
    </Container>
  );
};

export default Friend;
