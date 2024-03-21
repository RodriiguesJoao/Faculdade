/*const myArray = [40,20,10,33,45,100];

let num18 = myArray.find(findFunction);

// let num18 = myArray.find(a => a > 18);

function findFunction(value) {
    return value > 18;
}

console.log(num18); */

//============================================

// Array List de Nomes
// Encontar o nome que contenha a letra 'a'

const nomes = [Andre, Joao, Victor, Rafael, Pedro];

let nome = nomes.find(_nome => _nome.includes('a'));

console.log(nome);