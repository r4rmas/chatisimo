import React, { useState } from "react";
import ListFriends from "../ListFriends";
import ListRequests from "../ListRequests";
import {
  Container,
  Subcontainer,
  SwitchButton,
  Line,
  Circle,
  Icon,
} from "./styles";
import colors from "../../../colors";

const SideBar = () => {
  const [chatActive, setChatActive] = useState(true);

  return (
    <Container>
      <Subcontainer>
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
      </Subcontainer>
      {chatActive ? <ListFriends /> : <ListRequests />}
    </Container>
  );
};

export default SideBar;
