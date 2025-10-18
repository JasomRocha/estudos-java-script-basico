class Person {
    age = 0;
    static hands = 2; // Só consigo utilizar dentro da classe se torna uma propriedade (atributo) da classe. 
    // Se mudarmos o valor desse atributo, todas as instancias da classe sentirão a alteração
    constructor(name){
        this.name = name;
    }

    sayHi(){
        //console.log(`${this.name} diz olá`);
        console.log(`Oi eu sou o ${this.name} e tenho ${Person.hands} mãos`);
    }

}

class Student extends Person {
    constructor(name, id){
        super(name); // Utiliza a funcao construtor do pai (classe que ele extende);
        this.id = id;
    }
}

let p1 = new Student("Jasom", 1);
p1.age = 20;

console.log(`${p1.name} tem ${p1.age} anos`);

p1.sayHi();


// Variáveis ou métodos estáticos 

// São pertencente a classe PAI, caso sejam alteradas, todas as instâncias da classe sentem essa alteração. 

// --------------------------------------//
// Factory - é uma função que seu retorno é uma instancia de uma classe
function createPerson(name , age){
    return new Person(name, age);
}


let p2 = createPerson('Jasom', 28);

console.log(p2)