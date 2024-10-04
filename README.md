# -form-CadEndereco
# Descrição
 Projeto desenvolvido com o _ViaCep_(https://viacep.com.br/) para simplificar a pesquisa de endereços. A ferramenta oferece uma busca rápida e eficiente, auxiliando empresas de entregas a mapear rotas e otimizar suas operações. Assim, facilitamos o processo de entrega e melhoramos a experiência do cliente.

## Instruções de uso
1. digite o _CEP_ no campo indicado pelo nome.
2. aperte no botão de pesquisa, os outros campos serão preenchidos automaticamente.
   <br>
("caso o _CEP_ esteja errado sera enviado um _alert_ avisando que há um erro")

# Tecnologias Utilizadas
![Static Badge](https://img.shields.io/badge/CSS3-purple?style=for-the-badge&logo=CSS3)
![Static Badge](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaS&logoColor=black)
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## Explicação do codigo
~~~ JavaScript
const limparFormulario = () => {
  document.getElementById("logradouro").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("localidade").value = "";
  document.getElementById("Complemento").value = "";
  document.getElementById("uf").value = "";
};
~~~
-  **document.getElementById** = pega um elemento pelo _ID_
- **value** = pega o valor daquele elemento

 Este código está limpando o formulário, assim como o nome sugere. Caso o usuário registre um CEP e tenha a intenção de inserir outro, a função reseta os campos de entrada, deixando-os vazios novamente para um novo CEP ser inserido.
 
~~~ JavaScript
const eNumero = (numero) => /^[0-9]+$/.test(numero);
~~~
- **const** = declara uma variavel
- **/^[0-9]+$/** = expressão regular garante que o valor digitado seja um numero de _0-9_
- **.test** = argumento utilizado para verificar se somente numeros foram digitados retornando true ou false caso não tenha números

 A função declarada _eNumero_ verifica se o valor digitado é somente numeros.
~~~ JavaScript
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
~~~
- **.length** = retorna o numero de caracteres

A constante cepValido verifica o tamanho do CEP digitado e compara com a função eNumero. Caso ambos os requisitos sejam verdadeiros, retorna true, caso contrário, false.

~~~ JavaScript
const preencherFormulario = (endereco) => {
  document.getElementById("logradouro").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("localidade").value = endereco.localidade;
  document.getElementById("Complemento").value = endereco.complemento;
  document.getElementById("uf").value = endereco.uf;
};
~~~

 Essa função defini o valor dos _IDs_ como endereco. para preencher o formulario utilizando os dados da API.

~~~ JavaScript
 const pesquisarCep = async () => {
  limparFormulario();
  const url = `https://viacep.com.br/ws/${CEP.value}/json/`;
  if (cepValido(CEP.value)) {
    const dados = await fetch(url);
    const addres = await dados.json();
    if (addres.hasOwnProperty("erro")) {
      alert("Cep não encontrado");
    } else {
      preencherFormulario(addres);
    }
  } else {
    alert("CEP incorreto!");
  }
};
~~~
- **async** = torna a função assincrona, assim ela pode esperar por uma ação para ser ativada sem travar o resto do codigo
- **await** = espera pela resposta da função a assincrona
- **fetch(url)** = busca ou envia dados da API
- **addres** = contem o resultado da busca de dados da API
- **.json()** =  retorna o valor em JavaScript

A função agrupa todas as outras. Assim que o usuário digita no campo o _CEP_, a constante _cepValido_ valida e envia os dados para a API, transformando a resposta em _JSON_, assim preenchendo o formulário.
