// ECMA script 6

class Person {
    
    _age = 0;
    steps = 0;
    constructor(name, age){
        // Propriedades 
        this.name = name;
        this.age = age;
    }

    takeAStep(){
        this.steps++;
    }

    // setAge(newAge){
    //     if(typeof newAge == 'number'){
    //         this.age = newAge;
    //     }else {
    //         console.log(`${newAge} não é um número. por favor, informe uma idade válida`)
    //     }
    // }

    // Funções tipo getter 
    get age(){
        return this.age();
    }

    // Funções tipo setter
    set age(x){
        if(typeof x == 'number') this._age = x;   
        else console.log(`${x} não é um número. por favor, informe uma idade válida`);
    }
}

let pessoa1 = new Person("João");
let pessoa2 = new Person("Maria", 30);
let pessoa3 = new Person("Pedro", 40);

pessoa1.age = 20;

console.log(`P1 = ${pessoa1.name} tem ${pessoa1.age} anos`);
console.log(`P1 = ${pessoa2.name} tem ${pessoa2.age} anos`);
console.log(`P1 = ${pessoa3.name} tem ${pessoa3.age} anos`);

pessoa1.takeAStep();
pessoa1.takeAStep();
pessoa1.setAge(20)

console.log(`Passos de ${pessoa1.name}: ${pessoa1.steps}`)