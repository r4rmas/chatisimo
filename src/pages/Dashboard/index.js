import React, { useState, useEffect, useContext } from "react";
import Context from "../../context";
import { Page } from "../../styles";

const Dashboard = () => {
  const [{ user }, dispatch] = useContext(Context);
  //HACER UN FETCH Y OBTENER LOS DATOS DEL USUARIO DENTRO DEL USEEFFECT
  //ESOS DATOS ALMACENARLOS EN EL ESTADO DEL CONTEXTO PARA PODER ACCEDERLOS
  //DESDE EL HEADER
  return (
    <Page>
      <h2>Dashboard</h2>
    </Page>
  );
};

export default Dashboard;
