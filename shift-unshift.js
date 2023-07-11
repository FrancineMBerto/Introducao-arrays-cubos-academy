const nomesDeEstudantes = ['jose', 'joao', 'maria', 'joana'];

//.shift esse metodo remove o primeiro item de um array e retorna ele ; mas se quiser pode tirar do console.log e usar apenas pra remover do array o jose
console.log(nomesDeEstudantes.shift())

console.log(nomesDeEstudantes) //removeu jose;

//.unshift adiciona um item novo na primeira posição do array;
// sugestão :consultar MDN documentação para saber mais.
nomesDeEstudantes.unshift('josef')
console.log(nomesDeEstudantes)
