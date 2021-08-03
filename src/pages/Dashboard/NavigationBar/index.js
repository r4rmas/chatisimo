import React, { useState } from "react";
import ListFriends from "../ListFriends";
import ListNotifications from "../ListNotifications";
import { Container, SwitchButton, Line, Circle, Icon } from "./styles";
import colors from "../../../colors";

const NavigationBar = () => {
  const [chatActive, setChatActive] = useState(true);

  return (
    <div>
      <Container>
        <Icon
          style={chatActive ? { color: colors.blue } : { color: colors.black }}
        >
          <i className="fas fa-2x fa-comment" />
        </Icon>
        <SwitchButton onClick={() => setChatActive(!chatActive)}>
          <Line />
          <Circle style={chatActive ? { left: 0 } : { right: 0 }} />
        </SwitchButton>
        <Icon
          style={!chatActive ? { color: colors.blue } : { color: colors.black }}
        >
          <i className="fas fa-2x fa-bell" />
        </Icon>
      </Container>
      {chatActive ? <ListFriends /> : <ListNotifications />}
    </div>
  );
};

export default NavigationBar;
