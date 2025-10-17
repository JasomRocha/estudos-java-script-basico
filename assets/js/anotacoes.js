// // CONCEITOS BASICO DE JAVA SCRIPT

// let idade = 90
// let nome = "Jasom"
// nome = "Jasão"
// console.log(nome)

// // var é mutável assim com o let
// var name = "Jasom"; name = "John"
// console.log(name)

// // Const é imutável
// // let, const, var

// // TEMPLATE STRING

// let nomeCompleto = `${nome} Rocha Santos` // Permite colocar uma expressão dentor das chaves

// console.log(nomeCompleto)

// // Funções 

// function gravidade(){
//     console.log('A gravidade do planeta é:')
//     console.log(9.8)
// }


// // Arrow function - ECMA SCRIPT 6 - A partir dessa versão

// // normal
// function somar(x, y){
//     return x + y;
// }

// // Arrow funtion 
// const somar = (x, y ) => x + y;

// // O QUE É O DOM 

// // Document Object Model 

// function clicou(){
//     const teste = document.querySelector('#teste');
//     const ul = document.querySelector('ul');

//     console.log(ul)
//     ul.innerHTML += "<li> Adicionado pelo botão </li>"
// }

// function clicouMelhor(){
//     const teste = document.querySelector('#teste');
//     const ul = document.querySelector('ul');

//     let newLi = document.createElement("li"); // Cria o elemento na memória
//     newLi.innerText = "Item Adicionado"; // Insere conteudo no li
    
//     //Maneira correta de adicionar elementos na tela
    
//     // Adiciona no final 
//     ul.appendChild(newLi);

//     // Adiciona no começo
//     ul.prepend(newLi);
//     // console.log(ul)
//     // ul.innerHTML += "<li> Adicionado pelo botão </li>"
// }

// function clicado(){
//     const teste = document.querySelector('#teste');
//     const ul = document.querySelector('ul');

//     const newButton = document.createElement('button');
//     newButton.innerHTML = "Botão" 

//     ul.after(newButton);
// }

// function clicFor(){
//     const teste = document.querySelector('#teste');

//     const ul = document.querySelector('ul');

//     let newUl = document.createElement('ul');
    
//     for(let j = 0; j < 5; j++){
//         let newLi = document.createElement('li');
//         newLi.innerHTML = "Item adicionado" + ' ' + j;
//         newUl.append(newLi);    
//     }
//     ul.after(newUl);
// }

// function clicInput(){
//     const input = document.querySelector('input');
//     const botao = document.querySelector('.botao'); // .botao pega ele pela classe

//     if(input.getAttribute('type') === 'password'){
//         input.setAttribute('type', 'text');
//         botao.innerText =  "Ocultar senha";
//     }else{
//         input.setAttribute('type', 'password');
//         botao.innerText = "Mostrar Senha";
//     }
// }