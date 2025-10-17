// Mini Projeto - lista simples com eventos de teclado

// Elementos  
let input = document.querySelector('input');
let ul = document.querySelector('ul');


// Funções 
function apertouEnter(){

    if(event.key ==='Enter'){
        const texto = input.value.trim();
        if(texto != ''){
            const newLi = document.createElement('li');
            newLi.innerText = texto;
            ul.append(newLi);
            input.value = '';
        }
    }
}

// Eventos 
input.addEventListener('keydown', apertouEnter);