import "./App.css";
function Appas(props) {
  return (
    //div pai com um elemento h1 uma div interna e um input
    <div>
      <h1>
        {props.title}
        {props.name}
      </h1>
      <div>DIGITE O NOME:</div>
      <input
        name="Usuários"
        id="usuario"
        className="usuarioInput"
        placeholder="Usuário"
      />
    </div> // fim da div pai
  );
}

export default Appas;
