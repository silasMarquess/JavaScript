
function raiz(valor){
 return valor**0.5;
}

function soma(val1, val2){
    return val1 + val2;
}

const raiz1 = (valorCalc)=>{
raiz= valorCalc**0.5;
}
const raiz3 = (valor)=>valor**0.5;

const raiz4= valor=>Math.sqrt(valor);

let valor = raiz(25);
console.log(`Soma: ${soma(23,4)}`);
console.log(`Valor: ${valor.toString()}`);
console.log(`Valor2:${raiz3(25)}`);
console.log(`Valor: ${raiz4(64)}`);