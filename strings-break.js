const palavra = 'Alemanha'; // uma string se comporta como se fosse um array no for of, ou seja , pode ser iteravel ;;;

let encontrado = false

for (letra of palavra) {
   if (letra === 'h') {
      console.log("Tem a letra h")
      encontrado = true; // encontrado ===true dentro do for of caso tenha h
      break;
   }
}    // se no caso nao tiver h e querer mostrar isso, crie uma variavel encontrado === false fora e antes do for of

if (!encontrado) { // inves de usar o encontrado === false podemos utilizar o operador de negação (!encontrado) SE NÃO ENCONTRADO ...
   console.log("Não tem a letra h")
}