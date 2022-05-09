import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import UsuarioContext from "../context/UsuarioContext";

import Login from "./../templates/Login";
import Register from "./../templates/Register";
import Records from "./../templates/Records";
import Entry from "./../templates/Entry";
import Exit from "./../templates/Exit";

function App() {
  const [token, setToken] = useState(null);
  const [dataUsuario, setDataUsuario] = useState({
    email: "",
    password: "",
    name: "",
    token: "",
  });

  return (
    <UsuarioContext.Provider value={{ dataUsuario, setDataUsuario }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login salvarToken={(token) => setToken(token)} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/myrecords" element={<Records token={token} />}></Route>
          <Route path="/entrada" element={<Entry />}></Route>
          <Route path="/saida" element={<Exit />}></Route>
        </Routes>
      </BrowserRouter>
    </UsuarioContext.Provider>
  );
}

export default App;
