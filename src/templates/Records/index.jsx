import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import UsuarioContext from "../../context/UsuarioContext.js";

import {
  Main,
  DivNome,
  DivButton,
  DivRegistros,
  DivBot,
  NoRecords,
} from "./style.js";

function Records({ token }) {
  const { dataUsuario, setDataUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate();
  function logOut() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = "https://localhost:5000/myrecords";
    const promise = axios.put(URL, {}, config);
    promise.then(() => {
      navigate("/");
    });
    promise.catch((err) => console.log(err));
  }

  return (
    <>
      <Main>
        <DivNome>
          <h1>`Olá, ${dataUsuario.name}`</h1>
          <ion-icon onClick={logOut} name="log-out-outline"></ion-icon>
        </DivNome>
        <DivRegistros>
          <NoRecords>
            <p>Não há registros de entrada e saída</p>
          </NoRecords>
        </DivRegistros>
        <DivBot>
          <DivButton>
            <Link to={`/entrada`}>
              <ion-icon name="add-circle-outline"></ion-icon>
            </Link>
            <p>Nova entrada</p>
          </DivButton>
          <DivButton>
            <Link to={`/saida`}>
              <ion-icon name="remove-circle-outline"></ion-icon>
            </Link>
            <p>Nova saída</p>
          </DivButton>
        </DivBot>
      </Main>
    </>
  );
}

export default Records;
