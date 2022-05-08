import { Link } from "react-router-dom";

import {
  Main,
  DivNome,
  DivButton,
  DivRegistros,
  DivBot,
  NoRecords,
} from "./style.js";

function Records() {
  return (
    <>
      <Main>
        <DivNome>
          <h1>Olá, Fulano</h1>
          <ion-icon name="log-out-outline"></ion-icon>
        </DivNome>
        <DivRegistros>
          <NoRecords>
            <p>Não há registros de entrada e saída</p>
          </NoRecords>
        </DivRegistros>
        <DivBot>
          <DivButton>
            <Link to={`/novaentrada`}>
              <ion-icon name="add-circle-outline"></ion-icon>
            </Link>
            <p>Nova entrada</p>
          </DivButton>
          <DivButton>
            <Link to={`/novasaida`}>
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
