/* =====================
   ELEMENTOS DO FORM
===================== */
const tituloSelect = document.getElementById("titulo");
const descricaoInput = document.getElementById("descricao");
const precoInput = document.getElementById("preco");
const rodapeInput = document.getElementById("rodape");

/* =====================
   ELEMENTOS DO CARTAZ
===================== */
const cartazTitulo = document.getElementById("cartazTitulo");
const cartazDescricao = document.getElementById("cartazDescricao");
const cartazRodape = document.getElementById("cartazRodape");
const rs = document.querySelector(".cartaz-preco .rs");
const parteInteira = document.getElementById("parte-inteira");
const parteCentavos = document.getElementById("parte-centavos");
const cartazPreco = document.getElementById("cartazPreco");

// começa com R$ escondido
rs.style.display = "none";

/* =====================
   TÍTULO
===================== */
tituloSelect.addEventListener("change", () => {
  cartazTitulo.textContent = tituloSelect.value || "OFERTA";
});

/* =====================
   DESCRIÇÃO
===================== */
descricaoInput.addEventListener("input", () => {
  cartazDescricao.textContent = descricaoInput.value || "Descrição do Produto";
});

/* =====================
   PREÇO
===================== */
precoInput.addEventListener("input", () => {
  let valor = precoInput.value.trim().replace(",", ".");
  let numero = parseFloat(valor);

  if (!isNaN(numero)) {
    rs.style.display = "inline";

    let formatado = numero.toFixed(2);
    let [inteira, centavos] = formatado.split(".");

    parteInteira.textContent = inteira;
    parteCentavos.textContent = "," + centavos;

    // remove classes antigas
    cartazPreco.classList.remove("preco-grande", "preco-medio", "preco-pequeno");

    // aplica classe de acordo com quantidade de dígitos
    if (inteira.length === 1 || inteira.length === 2) { 
     cartazPreco.classList.add("preco-grande");
} else if (inteira.length <= 3) {
      cartazPreco.classList.add("preco-medio");
    } else {
      cartazPreco.classList.add("preco-pequeno");
    }
  } else {
    rs.style.display = "none";
    parteInteira.textContent = "";
    parteCentavos.textContent = "";
    cartazPreco.classList.remove("preco-grande", "preco-medio", "preco-pequeno");
  }
});

/* =====================
   RODAPÉ
===================== */
rodapeInput.addEventListener("input", () => {
  cartazRodape.textContent = rodapeInput.value;
});

/* =====================
   🎨 CORES
===================== */
document.getElementById("corTitulo").addEventListener("input", e => {
  cartazTitulo.style.color = e.target.value;
});

document.getElementById("bgTitulo").addEventListener("input", e => {
  cartazTitulo.style.backgroundColor = e.target.value;
});

document.getElementById("corRodape").addEventListener("input", e => {
  cartazRodape.style.color = e.target.value;
});

document.getElementById("bgRodape").addEventListener("input", e => {
  cartazRodape.style.backgroundColor = e.target.value;
});

document.getElementById("bordaRodape").addEventListener("input", e => {
  cartazRodape.style.borderTop = "5px solid " + e.target.value;
});


