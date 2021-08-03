import React, { useEffect, useContext } from "react";
import SideBar from "./SideBar";
import Chat from "./Chat";
import Context from "../../context";
import { logOut, setUser } from "../../context/reducer/actions";
import { get } from "../../requests";
import { Page } from "../../styles";
import { Container } from "./styles";

const Dashboard = () => {
  const [, dispatch] = useContext(Context);

  useEffect(() => {
    get("/auth", localStorage.getItem("token"))
      .then((response) => response.json())
      .then((data) => {
        data.error ? dispatch(logOut()) : dispatch(setUser(data.user));
      });
  });

  return (
    <Page>
      <Container>
        <SideBar />
        <Chat />
      </Container>
    </Page>
  );
};

export default Dashboard;
