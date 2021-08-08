import React, { useContext } from "react";
import Request from "./Request";
import Context from "../../../context";
import { Tooltip } from "./styles";

const ListRequests = () => {
  const [{ user }, dispatch] = useContext(Context);

  return (
    <>
      <Tooltip>Solicitudes de amistad pendientes</Tooltip>
      {user.requests.map((requester) => (
        <Request key={requester} requester={requester} />
      ))}
    </>
  );
};

export default ListRequests;
