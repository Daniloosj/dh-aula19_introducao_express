
// importante o Express para o projeto.
const Express = require('express');


// inicializando o Express no projeto Node.js.
const Aplicativo = new Express();


// Disponibilizo o meu recurso (endpoint) via Http.
Aplicativo.get('/', (RequisicaoCliente, RespostaServidor) => RespostaServidor.send('Hello World') );



// Configurei a porta de acesso aos recurso do Express via Http.
Aplicativo.listen(1234, () => console.log('Servidor okay ...'));