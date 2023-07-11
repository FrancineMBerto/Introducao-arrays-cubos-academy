// formas mais simples de manipular arrays;
//usando metodo push adicionamos mais facilmente itens no final do array

const nomesDeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andreia', 'alice'];

//.push faz a mesma coisa que :::::::: nomesDeEstudantes[nomesDeEstudantes.length] = 'pedro';
nomesDeEstudantes.push('pedro');
nomesDeEstudantes.push('pedro');

//.pop remove o ultimo item
nomesDeEstudantes.pop()
nomesDeEstudantes.pop()
nomesDeEstudantes.pop() // pop removeu até o nome alice alem dos dois pedros....


console.log(nomesDeEstudantes);