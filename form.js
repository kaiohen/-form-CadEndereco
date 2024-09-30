"use strict"; // Modo restrito
// Este modo Ajuda a evitar erros comuns de programação, JavaScript opera de forma mais segura e rigorosa
/* consumo de API - https://viacep.com.br/ */
// função limpar formulario
const limparFormulario = () => {
  document.getElementById("logradouro").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("localidade").value = "";
  document.getElementById("Complemento").value = "";
  document.getElementById("uf").value = "";
};
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
/// length verifica a quantidade de caracteres do argumento cep

// função para preencher formulario com campos da API
const preencherFormulario = (endereco) => {
  document.getElementById("logradouro").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("localidade").value = endereco.localidade;
  document.getElementById("Complemento").value = endereco.complemento;
  document.getElementById("uf").value = endereco.uf;
};
// função de consumo de API viaCep

// explicar dps
const pesquisarCep = async () => {
  limparFormulario();
  const url = `https://viacep.com.br/ws/${CEP.value}/json/`;
  if (cepValido(CEP.value)) {
    const dados = await fetch(url);
    // explicar dps
    const addres = await dados.json();
    // explicar dps

    // explicar dps
    if (addres.hasOwnProperty("erro")) {
      alert("Cep não encontrado");
    } else {
      preencherFormulario(addres);
    }
  } else {
    alert("CEP incorreto!");
  }
};
//adiciona escutador para executar consumo de API da ViaCep
document.getElementById("button").addEventListener("click", pesquisarCep);
