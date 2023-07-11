//exercicio
// faça um programa que calcula e imprime a tela e a soma dos itens de um array;

//minha resolução: os numeros que escolhi abaixo, farei com as duas estruturas, while e for:

const numerosPares = [2, 4, 6, 8, 10, 12, 14, 16]; // 72

let somaPar = 0
for (let i = 0; i < numerosPares.length; i++) {
   somaPar = somaPar + numerosPares[i];
}
console.log(`O total da soma dos números Pares é: ${somaPar}`);


const numerosImpares = [1, 3, 5, 7, 9, 11, 13, 15]; // 64
let somaImpar = 0;
let i = 0;
while (i < numerosImpares.length) {
   somaImpar = somaImpar + numerosImpares[i];
   i++
}
console.log(`O total da soma dos números ímpares é ${somaImpar}`);


//ABAIXO: RESOLUÇÃO DO PROFESSOR;

const numeros = [0, 5, 3, 69, 45, 18, 13, 2]; // tam 8;
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
   //sera executado para i de 0 até 7 | 8 nao sera mais executado
   soma = soma + numeros[i];
   //soma += numerosAleatorios[i];
}
console.log(`A soma dos números aleatorios é ${soma}`);