function Soma() {
    return 2 + 5 
}

console.log(Soma() )

function SomaII(n1, n2) {
    console.log(n1 + n2)
}

SomaII(5, 8)

function SomaII(n1, n2) {
    console.log(
        'O resultado da soma de', n1, '+', n2, 'é', n1+n2)
}

//Aquela atividade de fixação. (Surta não coleguinha)

//1-
function SomaII(n1, n2) {
    console.log(
        'O resultado da subtração de', n1, '-', n2, 'é', n1-n2)


//2-
    console.log(
        'O resultado da multiplicação de', n1, '*', n2, 'é', n1*n2)

//3-
    console.log(
        'O resultado da divisão de', n1, '/', n2, 'é', n1/n2)
}

SomaII(5, 9)
SomaII(18, 30)

const Potencia = (x, y) => {
    let result = x^y;
    return `${x} elevado a ${y} é igual a ${result}`;
}

console.log(Potencial(2, 3))