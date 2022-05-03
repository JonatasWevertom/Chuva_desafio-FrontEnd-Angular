export default function VerMais() {
  var pontos = document.getElementById("pontos");
  var maisTexto = document.getElementById("mais");
  var btnVerMais = document.getElementById("btnVerMais");

  if (pontos.style.display === "none") {
    pontos.style.display = "inline";
    maisTexto.style.display = "none";
    btnVerMais.innerHTML = "Leia Mais";
  } else {
    pontos.style.display = "none";
    maisTexto.style.display = "inline";
    btnVerMais.innerHTML = "Leia Menos";
  }
}
