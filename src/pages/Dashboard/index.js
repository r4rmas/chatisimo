import React, { useEffect, useContext } from "react";
import Context from "../../context";
import { logOut, setUser } from "../../context/reducer/actions";
import { get } from "../../requests";
import { Page } from "../../styles";

const Dashboard = () => {
  const [{ user }, dispatch] = useContext(Context);

  useEffect(() => {
    get("/auth", localStorage.getItem("token"))
      .then((response) => response.json())
      .then((data) => {
        data.error ? dispatch(logOut()) : dispatch(setUser(data.user));
        console.log(user);
      });
  });

  return (
    <Page>
      <h2>{user.password}</h2>
    </Page>
  );
};

export default Dashboard;
