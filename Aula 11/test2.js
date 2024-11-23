// Recebendo os valores de A e B (pode ser feito de diversas formas, como prompt, input, etc.)
let A = 5;
let B = 10;

// Criando uma variável auxiliar para armazenar temporariamente um valor
let aux = A;

// Trocando os valores
A = B;
B = aux;

// Imprimindo os valores trocados
console.log("Novo valor de A:", A);
console.log("Novo valor de B:", B);