// Trabalhando com requisiçoes
// https://jsonplaceholder.typicode.com/posts

// Conceito de promise
// promise = Promessa 
// Quando criamos uma função definimos o tipo de retorno dessa função 
// O Promise é um tipo de retorno que é uma promessa do que vai ser enviado 
// "Quando eu retornar algo será um response" -> Promise<Response>
// Isso acontece porque as requisições são assincrona - então  o callback espera o que vem na promessa e executa algo

function clicou () {
    // GET, POST, PUT, DELETE
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { 
            console.log(`Status: ${response.status}`)
            return response.json(); // Callback Assincrono - converte em JSON
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`); // CallBack Assincrono - aparece depois, só aparece quando a promessa se concretizar
        })
        .catch((error) => {
            alert('houve um problema com sua requisição');  
        })
        .finally(() => {
            alert('Acabou toda a operação');
        })
    alert("OPA, CLICOU"); // O alert nao depende de promessa nenhuma, vai executar independente da requisição
}

// Mesma funçao escrita da forma escrita
async function clicouAsync () {
    // força o java script esperar o fim das requisições
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    
    alert(`Titulo do primeiro post: ${json[0].title}`);
}

function inserir(){
     fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        }
     )
     .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
}

// Função POST com async
async function inserirAsync(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        }
     )
    let json = await response.json();
    console.log(json);
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);


// Status HTTP
// 200 - Significa que a requisição deu certo
// 300 - Redirecionamento 
// 400 - Erro de cliente
// 500 - Erro de servidor - navegador nao sabe o que aconteceu


// Método de envio de uma requisição 
// GET 
// POST
// PUT
// DELETE