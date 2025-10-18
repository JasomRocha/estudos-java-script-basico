// Versão do projeto de Luta utilizando Conceitos de Orientação a Objetos Funcionais

// Ou seja, conceitos como: Encapsulamento, herança, polimorfismo etc. sem usar classes
// Apenas usando funções... 

// Objeto com propriedades
const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

// Factory que instancia um Guerreiro
const createKnight = (name) => {
    return {
        ...defaultCharacter, // Herda todas as caracteristicas do personagem padrão
        name: name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}


// Factory que instancia um Mago
const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name: name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

// Factory que instancia um Monster
const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

// Factory que instancia um Monster
const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}


// Objeto que cria o cenário 
const stage = {
    // Propriedade - atributos do Objeto
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    // Actions - Classes do Objeto
    start(fighter1, fighter2, fighter1El, fighter2El ){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));;

        this.update();

    },

    update(){
        // Fighter 1 
        this.fighter1El.querySelector('.name').innerHTML = `${ this.fighter1.name } - ${ this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = ( this.fighter1.life  / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`
        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${ this.fighter2.name } - ${ this.fighter2.life.toFixed(1)} HP`
        let f2Pct = ( this.fighter2.life  / this.fighter2.maxLife) * 100;
         this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    },

    doAttack(attacking, attacked){
        // Verifica se os dois estao vivos
        if(attacking.life <= 0 ||attacked.life <=0 ){
            this.log('A luta acabou ');
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2); // numero aleatorio entre 0 e 2.0 (float)
        let deffenseFactor = (Math.random() * 2).toFixed(2); // numero aleatorio entre 0 e 2.0 (float)
         
        let actualAtack = attacking.attack * attackFactor; // potencializa em até 2x ou diminui a força ataque
        let actualDefense = attacked.defense * deffenseFactor; // potencializa em até 2x ou diminui a defesa

        if(actualAtack > actualDefense){
            attacked.life -= actualAtack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
           log.addMessage(`${attacking.name} causou ${actualAtack.toFixed(2)} de dano em ${attacked.name}`);
        }else{
            log.addMessage(`${attacked.name} conseguiu defender`);
        }


        this.update();
    }, 
}

// Objeto que loga os eventos na tela
const log = {
    list: [],
    addMessage(msg){
        this.list.push(msg),
        this.render()
    },
    render(){
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';
        for(let i in this.list){
            logEl.innerHTML += `<li> ${ this.list[i] } </li>`
        }
    }
}
