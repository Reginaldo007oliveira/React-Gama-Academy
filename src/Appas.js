//Usando Hooks: estado das coisas
import React, { Fragment, useState } from "react";
import "./App.css";
function Appas(props) {
  //declara a constante usuário e atribui um valor do estado para ela
  //conceito de desestruturação
  const [usuario, setUsuario] = useState("Guilherme");
  return (
    //div pai com um elemento h1 uma div interna e um input <div> foi substituida por <></>
    <Fragment>
      <p>{usuario}</p>
      <h1>{props.title}</h1>
      <h2> {props.name}</h2>
      <div>DIGITE O NOME:</div>
      <input
        name="Usuários"
        id="usuario"
        className="usuarioInput"
        placeholder="Usuário"
      />
    </Fragment>
  );
}

export default Appas;
