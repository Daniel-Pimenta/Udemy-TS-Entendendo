"use strict";
// tipos implicitos
var nome = 'joão';
console.log(nome);
//nome = 28;
var idade = 27;
console.log(idade);
var possuiHobbies = false;
console.log(possuiHobbies);
// tipos explicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
var minhaIdade2;
minhaIdade2 = '27';
console.log(typeof minhaIdade2);
// Array
var hobbies = ["cozinhar", true, "proticar esportes", 2];
console.log(hobbies[0]);
console.log(typeof hobbies);
// Tuplas
var endereco = ["Rua Sinuosa", 198, "Casa 8"];
console.log(endereco);
//Enuns
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Azul;
console.log(minhaCor + ' - ' + Cor[minhaCor]);
// Any
var carro = "BMW";
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//funções
function retonaNome() {
    return nome;
}
console.log(retonaNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function mult(a, b) {
    return a * b;
}
console.log(mult(2, 5));
// tipo função
var calculo;
calculo = digaOi;
calculo();
var calculo2;
calculo2 = mult;
console.log(calculo2(1, 2));
//objetos
var usuario = {
    nome: '',
    idade: 0
};
console.log(usuario);
// desafio
function baterPonto(h) {
    if (h > 8)
        return 'Fora do ponto';
    return 'Ponto normal';
}
var funcionario = {
    supervisores: ['ana', 'fernando'],
    ponto: baterPonto
};
console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.ponto(9));
var f;
f = { sup: ['ola'], ponto: baterPonto };
console.log(f);
console.log(f.sup);
console.log(f.ponto(9));
// Union Types
var nota;
nota = 6;
console.log("Minha nota eh " + nota + "!");
nota = "show";
console.log("Minha nota eh " + nota + "!");
//checagem de typos
var valor = 30;
if (typeof valor === "number") {
    console.log("valor");
}
else {
    console.log(typeof valor);
}
//never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: "sabao",
    preco: 1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Presisa ter um nome !");
        }
        if (this.preco <= 0) {
            falha("Preço inválido !");
        }
    }
};
produto.validarProduto();
var altura = 12;
// tipos numericos não podem receber null
//altura = null;
var alturaOpcional = 12;
alturaOpcional = null;
var c = {
    nome: "Fulano",
    tel1: "1234",
    tel2: null
};
console.log(c);
var contaBancaria = {
    saldo: 0,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: "Fulano",
    conta: contaBancaria,
    contatos: ["1", "2"]
};
console.log(correntista);
console.log(correntista.conta);
correntista.conta.depositar(1000);
console.log(correntista.conta);
//# sourceMappingURL=tipos.js.map