//Usando Hooks: estado das coisas
import React, { Fragment, useState } from "react";
import axios from "axios";

function Home(props) {
  //declara a constante usuário e atribui um valor do estado para ela
  //conceito de desestruturação
  //axios vai disparar o metodo get e dar um console log na resposta
  const [usuario, setUsuario] = useState("");

  function handlePesquisa() {
    axios
      .get("https://api.github.com/users/ramosht/repos")
      .then((response) => console.log(response));
  }
  return (
    //div pai com um elemento h1 uma div interna e um input <div> foi substituida por <></>
    <Fragment>
      <p>{usuario}</p>
      <h1>{props.title}</h1>
      <h2> {props.name}</h2>
      <div>DIGITE O NOME:</div>
      <input
        name="Usuários"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button onClick={handlePesquisa} type="button">
        {" "}
        Pesquisar{" "}
      </button>
    </Fragment>
  );
}

export default Home;
