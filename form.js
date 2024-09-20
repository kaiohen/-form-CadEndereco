'use strict'; // Modo restrito
// Este modo Ajuda a evitar erros comuns de programação, JavaScript opera de forma mais segura e rigorosa
/* consumo de API - https://viacep.com.br/ */ 

// função limpar formulario
const limparFormulario = () => {
    document.getElementById(logradouro).value = "";
    document.getElementById(numero).value = "";
    document.getElementById(bairro).value = "";
    document.getElementById(localidade).value = "";
    document.getElementById(Complemento).value = "";
    document.getElementById(uf).value = "";
}

