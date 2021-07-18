const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;

  let email = document.getElementById("email").value;
  let data = {
    nome,
    email,
  };
  let convertData = JSON.stringify(data);
  localStorage.setItem("lead", convertData);
  let contet = document.getElementById("content");
  let carregando = `<p>carregando</p>`;
  let Pronto = `<p>Pronto .. enviado</p>`;
  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = Pronto;
  }, 1000);
});
//preventDefault deixa o botão sem ação nenhuma. A pagina fica parada ao clicar no enviar
