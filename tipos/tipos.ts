// tipos implicitos
let nome = 'joão';
console.log(nome);
//nome = 28;

let idade = 27;
console.log(idade);

let possuiHobbies = false;
console.log(possuiHobbies);

// tipos explicitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);

let minhaIdade2: string;
minhaIdade2 = '27';
console.log(typeof minhaIdade2);

// Array

let hobbies: any[] = ["cozinhar",true,"proticar esportes",2];
console.log(hobbies[0]);
console.log(typeof hobbies);

// Tuplas
let endereco :[string, number, string] = ["Rua Sinuosa", 198, "Casa 8"];
console.log(endereco);

//Enuns
enum Cor {
  Cinza,
  Verde,
  Azul
}
let minhaCor: Cor = Cor.Azul;
console.log(minhaCor + ' - ' + Cor[minhaCor]);

// Any
let carro: any = "BMW";
console.log(carro);
carro = {marca: 'BMW', ano: 2019};
console.log(carro);

//funções
function retonaNome(): string {
  return nome;
}
console.log(retonaNome());

function digaOi() :void {
  console.log('Oi');
}

digaOi();

function mult(a:number, b:number) :number{
  return a * b;
}
console.log(mult(2, 5));

// tipo função
let calculo;
calculo = digaOi; 
calculo();

let calculo2:(x:number, y:number) => number
calculo2 = mult;
console.log(calculo2(1,2));


//objetos

let usuario = {
  nome: '',
  idade: 0
}
console.log(usuario);


// desafio
function baterPonto(h:number) : string {
  if (h>8) return 'Fora do ponto';
  return 'Ponto normal';
}

let funcionario : {
  supervisores:string[], 
  ponto:(h:number) => string
} = {
  supervisores: ['ana','fernando'],
  ponto : baterPonto
}
console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.ponto(9));

// Typos personalizados
type Funcionario = {
  sup:string[], 
  ponto:(h:number) => string
}

let f : Funcionario;
f = {sup:['ola'], ponto:baterPonto}
console.log(f);
console.log(f.sup);
console.log(f.ponto(9));

// Union Types
let nota: number | string;
nota = 6;
console.log(`Minha nota eh ${nota}!`);
nota = "show";
console.log(`Minha nota eh ${nota}!`);


//checagem de typos
let valor = 30
if (typeof valor === "number"){
  console.log("valor");
}else{
  console.log(typeof valor);
}

//never
function falha(msg : string) :never {
  throw new Error(msg);
}

const produto = {
  nome : "sabao",
  preco: 1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0){
      falha("Presisa ter um nome !");
    }
    if (this.preco <=0) {
      falha("Preço inválido !");
    }
  }
}

produto.validarProduto();

let altura = 12;
// tipos numericos não podem receber null
//altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;


type contato = {
  nome : string,
  tel1 : string,
  tel2 : null | string
}

const c : contato = {
  nome: "Fulano",
  tel1: "1234",
  tel2: null
}

console.log(c);

// DESAFIO 2

type ContaBancaria = {
  saldo : number,
  depositar: (valor:number) => void
}

type Correntista = {
  nome : string,
  conta: ContaBancaria,
  contatos : string[]
}

let contaBancaria : ContaBancaria = {
  saldo : 0,
  depositar (valor: number) {
    this.saldo += valor;
  }
}


let correntista :Correntista = {
  nome  : "Fulano",
  conta : contaBancaria,
  contatos : ["1","2"]
}


console.log(correntista);
console.log(correntista.conta);
correntista.conta.depositar(1000);
console.log(correntista.conta);
