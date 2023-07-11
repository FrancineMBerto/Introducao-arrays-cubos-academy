// faça um exercicio que conta quantas letras "a" existem numa determinada palavra e imprima o resultado na tela;

//minha resolução::::

const palavra = 'anagrama';

let temA = false;
let contaA = 0

for (let letra of palavra) {
   if (letra === 'a') {
      contaA++
      temA = true;
   }
}

if (temA === true) {
   console.log(`Quantidade de letras as: ${contaA}`)
} else {
   console.log("Não existe nenhuma letra 'a' na palavra.")
}

//resolução do preofessor::::

const palavraP = 'abracadabra';
let quantidade = 0;

for (let letra of palavraP) {
   if (letra === 'a') {
      quantidade++
   }
}
console.log(quantidade)