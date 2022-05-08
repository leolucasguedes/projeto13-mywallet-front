import { useState } from "react";

import { Main, DivNome, DivInputs, Input, Entrar } from "./style.js";

function Exit() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
    return (
      <>
        <Main>
        <DivNome>
          <h1>Nova Saída</h1>
        </DivNome>
        <DivInputs>
          <Input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor"
            required
          />
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            required
          />
        </DivInputs>
        <Entrar>Salvar saída</Entrar>
      </Main>
      </>
    );
  }
  
  export default Exit;
  