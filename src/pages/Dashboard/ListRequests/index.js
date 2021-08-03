import React, { useContext } from "react";
import Request from "./Request";
import Context from "../../../context";

const ListRequests = () => {
  const [{ user }, dispatch] = useContext(Context);

  return user.requests.map((requester) => <Request requester={requester} />);
};

export default ListRequests;
