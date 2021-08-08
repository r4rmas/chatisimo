import React, { useContext } from "react";
import Request from "./Request";
import Context from "../../../context";

const ListRequests = () => {
  const [{ user }, dispatch] = useContext(Context);

  return user.requests.map((requester) => (
    <Request key={requester} requester={requester} />
  ));
};

export default ListRequests;
