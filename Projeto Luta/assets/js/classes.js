// Personagens do Jogo
// Knight ou Sorcerer - Guerreiro ou Mago
// LittleMonster ou BigMonster

class Character{
    _life = 1; // conveção - propriedade interna da classe... possui get and setter para acessar
    maxLife = 1;
    atack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife; // Se a vida for menor que zero coloca zero se não insere o novo life
    }

}

class Knight extends Character{
    constructor(name){
        // Propriedades (atributos)
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character{
    constructor(){
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character{
    constructor(){
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }

    start(){
        this.update();
        this.fighter1El.querySelector('.atackButton').addEventListener('click', () => this.doAtack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.atackButton').addEventListener('click', () => this.doAtack(this.fighter2, this.fighter1));;
    }

    update(){
        // Fighter 1 
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife ) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife ) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    }

    doAtack(atacking,atacked ){
        if(atacking.life <=0 || atacked.life <= 0){
            this.log.addMessage(`A luta acabou!`);
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2); // numero aleatorio entre 0 e 2.0 (float)
        let deffenseFactor = (Math.random() * 2).toFixed(2); // numero aleatorio entre 0 e 2.0 (float)

        let actualAtack = atacking.attack * attackFactor; // potencializa em até 2x ou diminui a força ataque
        let actualDefense = atacked.defense * deffenseFactor;

        if(actualAtack > actualDefense){
            atacked.life -= actualAtack;
           this.log.addMessage(`${atacking.name} causou ${actualAtack.toFixed(2)} de dano em ${atacked.name}`);
        }else{
            this.log.addMessage(`${atacked.name} conseguiu defender`);
        }

        this.update();
    }
}

class Log {
    list = []; // Lista de Logs

    constructor(listEl){
        this.listEl = listEl; // Recebe o elemento html onde será renderizado os logs
    }

    addMessage(msg){
        this.list.push(msg); // Adiciona mensagem na lista de logs
        this.render(); // cahama função renderizar
    }

    render(){
        this.listEl.innerHTML = ''; // limpa o elemento html que tem a lista

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>` // percorre a lista de logs jogando na tela 
        }
    }
}