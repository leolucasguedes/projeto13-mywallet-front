import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Main, DivLogo, DivTexto, DivInputs, Input, Entrar } from "./style.js";

function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const navigate = useNavigate();

  function signUp(event) {
    event.preventDefault();
    const URL = "https://localhost:5000";
    const promise = axios.post(URL, {
      email: email,
      name: nome,
      password: senha,
      confirmation: confirmation,
    });
    promise.then((response) => {

      navigate("/");
    });
    promise.catch((err) => alert("Preencha os campos corretamente"));
  }

  return (
    <>
      <Main>
        <DivLogo>
          <h1>MyWallet</h1>
        </DivLogo>
        <form onSubmit={signUp}>
          <DivInputs>
            <Input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              placeholder="Nome"
              required
            />
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="E-mail"
              required
            />
            <Input
              type="password"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              placeholder="Senha"
              required
            />
            <Input
              type="password"
              onChange={(e) => setConfirmation(e.target.value)}
              value={confirmation}
              placeholder="Confirme a senha"
              required
            />
          </DivInputs>
          <Entrar type="submit">Cadastrar</Entrar>
        </form>
        <DivTexto>
          <Link to={`/`}>
            <p>Primeira Vez? Cadastre-se!</p>
          </Link>
        </DivTexto>
      </Main>
    </>
  );
}

export default Register;
