//exercicio
//minha resolução:

// Crie um array com 5 nomes de países;
const paises = ['Brasil', 'Estados Unidos', 'Coreia Do Sul', 'Portugal', 'Canadá'];

// Adicione um pais ao fim da lista; // Imprima a lista na tela;

paises.push('Angola');
console.log(paises);

// Remova um pais do fim da lista; // Imprima a lista na tela;

paises.pop();
console.log(paises);

// Adicione um pais no inicio da lista; // Imprima a lista na tela;

paises.unshift('Angola');
console.log(paises);

// Remova um pais do inicio da lista; // Imprima a lista na tela;

paises.shift();
console.log(paises);


console.log(paises[4]); // Imprima o ultimo pais da lista na tela;
//professor explicou que este metodo é pouco eficiente e deu a solução a seguir:
const ultimo = paises[paises.length - 1] //observe que o -1 serve apenas para pegar o ultimo item pois length imprimi 1 a  mais pois conta os itens da lista, nao o indice;
console.log(ultimo)


console.log(paises[1]); // Imprima o segundo pais da lista na tela;


console.log(paises[2]); // Imprima o pais de indice 2 na tela;
//professor explicou que este metodo é pouco eficiente e deu a solução a seguir:


//fim