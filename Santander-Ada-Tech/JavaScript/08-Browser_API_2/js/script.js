const aumentarBotao = document.querySelector("#aumentar-botao");
const diminuirBotao = document.querySelector("#diminuir-botao");

const contadorElemento = document.querySelector("#contador");

const input = document.querySelector("#input");

aumentarBotao.addEventListener("click", () => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1;

  aumentarBotao.classList.add("btn");
  diminuirBotao.classList.remove("btn");
});

diminuirBotao.addEventListener("click", () => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual - 1;

  diminuirBotao.classList.add("btn");
  aumentarBotao.classList.remove("btn");
});

input.addEventListener("input", () => {
  console.log(input.value);
});

// Adicionando estilos inline no elemento contador

contadorElemento.style.color = "red";
contadorElemento.style.padding = "0 2rem";

// Mamnipular Classes

console.log(diminuirBotao.classList);

// Mudando o tema da página

const themebutton = document.querySelector("#theme");

let darkTheme;

// definindo uma função que será executado ao carregar a janela
window.onload = () => {

    
  const isDarkThemeStorage = localStorage.getItem("isDarkTheme");

  darkTheme = isDarkThemeStorage === "true";

  const body = document.querySelector("body");

  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};

themebutton.addEventListener("click", () => {
  darkTheme = !darkTheme;

  localStorage.setItem("isDarkTheme", darkTheme);

  const body = document.querySelector("body");

  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
