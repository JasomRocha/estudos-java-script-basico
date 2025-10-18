// Instanciando um objeto funcional
const char = createKnight('Jasom');
const monster = createBigMonster(); 


console.log(typeof stage);
// Instanciando o objeto que inicia o cenario, invocando uma funcao de inicialização
stage.start(
    char, 
    monster, 
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

