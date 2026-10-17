// Troque pelo número real, com código do país e DDD, só dígitos (ex.: 5519999999999)
var WHATS = "+55 19 98980-6352";
document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();
  var nome = document.getElementById("nome").value.trim();
  var err = document.getElementById("err");
  if (!nome) {
    err.textContent = "Informe seu nome para continuar.";
    return;
  }
  err.textContent = "";
  var txt =
    "Olá, Marcos! Meu nome é " +
    nome +
    ". Preciso de: " +
    document.getElementById("serv").value +
    "." +
    (document.getElementById("msg").value.trim()
      ? "\n" + document.getElementById("msg").value.trim()
      : "");
  window.open(
    "https://wa.me/" + WHATS + "?text=" + encodeURIComponent(txt),
    "_blank",
    "noopener",
  );
});

// Se a foto ainda não existir em assets/, mostra só a legenda no bloco azul
document.querySelectorAll(".gallery img").forEach(function (img) {
  function vazio() {
    img.parentElement.classList.add("vazio");
  }
  img.addEventListener("error", vazio);
  if (img.complete && img.naturalWidth === 0) vazio();
});
