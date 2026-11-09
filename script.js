const form = document.querySelector("#formTarefa");
const campo = document.querySelector("#novaTarefa");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");
function atualizarContador() {
  const total = lista.children.length;
  const concluidas = lista.querySelectorAll(".concluida").length;
  contador.textContent = `${total} tarefa(s) — ${concluidas} concluída(s)`;
}
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = campo.value.trim();
  if (!texto) return;
  const item = document.createElement("li");
  const marcar = document.createElement("input");
  marcar.type = "checkbox";
  const descricao = document.createElement("span");
  descricao.textContent = texto;
  const remover = document.createElement("button");
  remover.textContent = "Remover";
  remover.className = "remover";
  marcar.addEventListener("change", () => {
    item.classList.toggle("concluida", marcar.checked);
    atualizarContador();
  });
  remover.addEventListener("click", () => {
    item.remove();
    atualizarContador();
  });
  item.append(marcar, descricao, remover);
  lista.append(item);
  campo.value = "";
  campo.focus();
  atualizarContador();
});