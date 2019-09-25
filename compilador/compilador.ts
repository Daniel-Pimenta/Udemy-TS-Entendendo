let canal : string = "Gaveta";
let inscritos: number = 610234;

//canal = inscritos;
console.log(`Canal : ${canal}`);

//let nome = "Pedro";
//console.log(`Nome : ${nome}`);


function soma (a:any, b:any) {
  return a + b;
}

let qqc
qqc = 12;
qqc = "ola";

function saudar (isManha : boolean) :string {
  let saudacao: string;
  if (isManha) {
    saudacao = "Bom dia !";
  } else {
    saudacao = "Ok !";
  }
  return saudacao;
}

console.log(saudar(true));