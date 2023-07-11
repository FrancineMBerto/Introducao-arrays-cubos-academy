// imprima todos os numeros pares entre 1 e 50.

//minha resolução: // com for

for (let i = 1; i <= 50; i += 2) {
   if (i === 1) {
      i += 1            //eu quis seguir a risca o enunciado e começar com 1 ;;
   }
   console.log(i)
}

//resolução do professor: // com while

let numero = 2;

while (numero <= 50) { // começa com 2;
   console.log(numero);
   numero += 2;
}
