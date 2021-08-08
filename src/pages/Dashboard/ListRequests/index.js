import React, { useContext } from "react";
import Request from "./Request";
import Context from "../../../context";
import { Tooltip, Container } from "./styles";

const ListRequests = () => {
  const [{ user }, dispatch] = useContext(Context);

  return (
    <>
      <Container>
        <Tooltip>Solicitudes de amistad pendientes</Tooltip>
      </Container>
      {user.requests.map((requester) => (
        <Request key={requester} requester={requester} />
      ))}
    </>
  );
};

export default ListRequests;
