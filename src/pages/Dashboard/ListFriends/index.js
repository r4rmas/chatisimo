import React, { useContext } from "react";
import Context from "../../../context";
import Requester from "./Requester";
import { Container } from "./styles";
import Friend from "./Friend";

const ListFriends = () => {
  const [{ user }] = useContext(Context);

  return (
    <>
      <Requester />
      {user.friends &&
        user.friends.map((friend) => <Friend key={friend} user={friend} />)}
    </>
  );
};

export default ListFriends;
