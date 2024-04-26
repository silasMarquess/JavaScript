const Pessoa_1={
 //atributos
    nome: `Silas Marques`,
    idade: 23,
    sobre_nome:`de Sousa`,

 //metodos do objetos
  fala(){
    console.log("Oi meu nome é: ",this.nome);
  },

  falaIdade(){
   console.log(`Minha Idade é: ${this.idade}`);
  }

};

pessoa2 ={
    nome: `Joao`,
    sobre_nome: `Marcos`,
    idade:34
};

pessoaQualquer = (nome, sobreNome, idade)=>{nome,sobreNome,idade};

//funções que cria objetos são chamadas de factory(Fabrica)
function CriaPessoa(nome, sobreNome, idade){
    //escopo local
    return {
        nome,sobreNome,idade
    }
}
 
const p1 = CriaPessoa(`Silas`,`Marques`, 23);
const p2 = CriaPessoa(`Joao`, `SOusa`, 45);
const p3 = CriaPessoa(`Maria`, `Alves de sousa`, 55);
pessoaQualquer(`Silas`, `Marques`, 23);


console.log(Pessoa_1.fala())
console.log(Pessoa_1.falaIdade());

