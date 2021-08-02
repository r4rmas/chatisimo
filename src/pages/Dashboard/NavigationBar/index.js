import React, { useState } from "react";
import ListFriends from "../ListFriends";
import ListNotifications from "../ListNotifications";

const NavigationBar = () => {
  const [friendsActive, setFriendsActive] = useState(true);

  return (
    <div>
      <div>
        <span>Amigos</span>
        <span>Notificaciones</span>
      </div>
      {friendsActive ? <ListFriends /> : <ListNotifications />}
    </div>
  );
};

export default NavigationBar;
