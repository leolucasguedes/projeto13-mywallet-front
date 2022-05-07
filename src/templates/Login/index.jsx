import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import UsuarioContext from "../../context/UsuarioContext.js";
//import CarregandoContext from "../../context/CarregandoContext.js";
//import { ThreeDots } from "react-loader-spinner";

import { Main, DivLogo, DivTexto, DivInputs, Input, Entrar } from "./style.js";

function Login({ salvarToken }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  //const { dataUsuario, setDataUsuario } = useContext(UsuarioContext);

  function signIn(event) {
    event.preventDefault();

    //setCarregando(true);

    const URL = "https://localhost:5000";
    const promise = axios.post(URL, {
      email: email,
      password: senha,
    });
    promise.then((response) => {
      const { data } = response;
      setDataUsuario({
        ...dataUsuario,
        email: data.email,
        password: data.password,
        name: data.name,
        token: data.token,
      });
      //console.log(data);

      salvarToken(data.token);

      navigate("/registros");
      //setCarregando(false);
    });
    promise.catch(({ response }) => {
      //console.log(response);
      //setCarregando(false);
      setDataUsuario({
        ...dataUsuario,
        email: "",
        password: "",
        name: "",
        token: "",
      });
      alert("Login ou senha inválidos");
    });
  }

  return (
    <Main>
      <DivLogo>
        <h1>MyWallet</h1>
      </DivLogo>
      <form onSubmit={signIn}>
        <DivInputs>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
          <Input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            required
          />
        </DivInputs>
        <Entrar type="submit">Entrar</Entrar>
      </form>
      <DivTexto>
        <Link to={`/cadastro`}>
          <p>Primeira Vez? Cadastre-se!</p>
        </Link>
      </DivTexto>
    </Main>
  );
}

export default Login;
