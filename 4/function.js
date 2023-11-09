
 
//Inserindo chave valor no localStorage
localStorage.setItem('username', 'Gabriel');

//Variavel recebendo informação do localStorage e mostrando com console.log
let username = localStorage.getItem('username');
console.log(username);


//Inserindo chave valor no localStorage
localStorage.setItem('email', 'gabriel@gabriel.com.br');

//Variavel recebendo informação do localStorage e mostrando com console.log
let email = localStorage.getItem('email');
console.log(email);

//Removendo a chave do localStorage
localStorage.removeItem('username');
console.log(username);

//Removendo a chave do localStorage
localStorage.removeItem('email');
console.log(email);

//Inserindo chave valor no localStorage
localStorage.setItem('email', 'gabriel@gabriel.com.br');
console.log(email);


//Inserindo chave valor no localStorage
localStorage.setItem('url', 'https://www.linkedin.com/in/gabriel-de-oliveira-pacheco-1b581271/');

//Variavel recebendo informação do localStorage e mostrando com console.log
let userurl = localStorage.getItem('url');
console.log(userurl);

//Removendo a chave do localStorage
localStorage.removeItem('email');
console.log(userurl);







