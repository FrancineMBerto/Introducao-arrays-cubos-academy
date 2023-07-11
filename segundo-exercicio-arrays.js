//exercicio
//faca um programa que imprima todos os elementos de um array que contem alguns numeros quaisquer;
//minha resolução com for:
const numerosQuaisquer = [10, 20, 30, 40, 50]

for (let i = 0; i < numerosQuaisquer.length; i++) {
   console.log(numerosQuaisquer[i]);
}

//abaixo o codigo que o prof fez utilizando while:

const numeros = [0, 3, 18, 2, 11];

let i = 0;
while (i < numeros.length) { // enquanto o i for menos que o tam do array
   // executar isso
   console.log(numeros[i]);
   i++;
}
