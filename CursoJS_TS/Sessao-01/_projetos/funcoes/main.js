function MinhaFuncao(nome){
    console.log(`Bom dia  ${nome}`);
}

//função com retorno sem valores default para os parametros
function SomaDoisValores(n1, n2){
    return n1 + n2;
}

//funcção com retorno com valores default para os parametro 
function SomaDoisValores2(n1=0, n2 =0){
return n1+n2;
}
console.log(`Resultado: ${SomaDoisValores2()}`);

//função anônima é uma função cujo o valor será atribuido á uma variavel
const numero = function (valorRaiza) {
 return Math.sqrt(numero);
};

//Aero Functions
const numero2 = (n) => Math.sqrt(n);

console.log(numero2(25));