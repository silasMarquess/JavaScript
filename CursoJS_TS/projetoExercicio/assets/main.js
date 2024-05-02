
const btn = document.querySelector("#btn");

btn.addEventListener('click', function (e) {
    e.preventDefault();

    //capiturando dados 
    const InputPeso = document.querySelector("#txtPeso");
    const INputAltura = document.querySelector("#txtAltura");

    const peso = Number(InputPeso.Value);
    const altura = Number(INputAltura.Value);

   /* if (!peso || !altura) {
        setResultadoIMC('res_ruim', 'Peso ou ALtura Invalidos');
        return ;
    }*/
    console.log(peso) ;
    const imc = CalculaIMC(peso, altura);
    if (imc <= 18.5) {
        setResultadoIMC('res_ruim', `Abaixo do Peso:${imc}`);
    } else if (imc >18.5 && imc <=24.9) {
        setResultadoIMC('res_bom', `Peso Normal:${imc}}`);
    }else if(imc>24.9 && imc<=29.9){
   setResultadoIMC('res_ruim',`Sobrepeso:${imc}`);
    }else if(imc>29.9 && imc<=34.9){
        setResultadoIMC('res_ruim',`Obesidade nivel 1: ${imc}`);

    }else if(imc>34.9 && imc<=39.9){
        setResultadoIMC('res_ruim', `Obesidade nivel 2: ${imc}`);
    }else{
        setResultadoIMC(`res_ruim`,`Obesidade nivel 3: ${imc}`);
    }
});

function CalculaIMC(peso, altura) {
    return peso / (altura * altura);
}

function CriaPagrafo(className, resultado) {
    //criando um elemento e adicionando ao p
    const p = document.createElement("p");
    p.classList.add(className);
    //adicionando um texto ao p
    p.innerHTML = resultado;
    return p;
}


function setResultadoIMC(className, resultado) {
    //get o elemento do formulario
    const res = document.querySelector("#res");
    //adiciona um texto vazio ao elemento
    res.innerHTML = '';
    //adicionando um elemento filho ao p
    res.appendChild(CriaPagrafo(className, resultado));
}