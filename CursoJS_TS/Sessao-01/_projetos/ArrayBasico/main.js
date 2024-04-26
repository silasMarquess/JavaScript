let alunos = [12,45,56,7.9];
console.log(alunos[0]);
console.log(alunos[3]);



//retornando um indece de um elemento
const index = alunos.indexOf(56);
console.log(index);


//adicionando elementos ao final do array
alunos.push(23);
console.log(alunos);

//adicionando elemento no começo
alunos.unshift(33);
console.log(alunos);
//quando usamos essa função todos os elementos iram mudar de indices

//removendo um elemento que fica no final da lista
alunos.pop();
console.log(alunos);

//removendo e retornando o ultimo elemento do Array
const ultimo = alunos.pop();
console.log(ultimo);

//deletando elemento especiifico do array
delete alunos[0];

console.log(alunos);

//fatiando um array
console.log(alunos.slice(0,3));

//pegando o tamanho do array
console.log(alunos.length);