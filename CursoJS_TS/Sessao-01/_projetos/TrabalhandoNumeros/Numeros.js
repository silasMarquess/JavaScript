let num1 = 3;
let num2 = 4.5;
let numeroChato =23.234212421412;

//transformar um numero em string e juntar com outros:
console.log(num1.toString() + num2);

//representação binária do numero:
console.log(num1.toString(2))

//controlando casas decimais dos numeros:
console.log(numeroChato.toFixed(3));

//testando se o numero é inteiro:
console.log(Number.isInteger(num1));

//passando estring para float:
let string_1 = '23.56';
console.log(typeof(string_1));
let stringFloat = parseFloat(string_1);
console.log(typeof(stringFloat));



