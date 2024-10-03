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
 Este codigo está limpando o formulario assim como o nome sugere, caso o usuário registre um _CEP_ e tenha a intenção de colocar um outro a função reseta os campos inputs deixando eles vazios denovo para um novo _CEP_ ser inserido.

