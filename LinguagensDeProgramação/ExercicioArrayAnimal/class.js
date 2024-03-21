// Classe Animal
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Criando o array de animais
let animais = [
    new Animal('Cachorro', 3),
    new Animal('Gato', 7),
    new Animal('Coelho', 2),
    new Animal('Pássaro', 6),
    new Animal('Peixe', 1)
]

// Filtrando os animais com idade > 5
let animaisComIdadeMaiorQue5 = animais.filter(animal => animal.idade > 5);

// Exibindo os animais com idade > 5
console.log(animaisComIdadeMaiorQue5);
animaisComIdadeMaiorQue5.forEach(animal => {
    console.log(animal.nome + " - " + animal.idade + " anos");
});
