// Definir uma função para gerar um número inteiro aleatório entre min e max
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Definir uma função para gerar texto zalgo
function zalgo(texto) {
  // Criar uma lista de caracteres especiais
  var marcas = Array.from({length: 111}, (v, k) => String.fromCharCode(k + 768));
  // Dividir o texto em palavras
  var palavras = texto.split(" ");
  // Para cada palavra, adicionar caracteres especiais aleatórios em cima ou embaixo de cada letra alfanumérica
  var zalgo_texto = palavras.map(function(palavra) {
    return palavra.split("").map(function(c) {
      return c + (/\w/.test(c) ? marcas.slice(0, randomInt(1, 5)).join("") : "");
    }).join("");
  }).join(" ");
  // Retornar o texto zalgo
  return zalgo_texto;
}

// Testar a função com um exemplo
var texto_normal = document.getElementById("glitchyText").value
var texto_zalgo = zalgo(texto_normal);
console.log(texto_zalgo);
