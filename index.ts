// Basic Types

const pago: boolean = true;
const valor: number = 2299;
const desc: string = "5700xt";
// Arays
const idades: number[] = [22, 25, 29];
const nomes: Array<string> = ["Reinaldo"];

// Tuples - Como se fosse um array mas vc diz as posições e tipos
let jogadores: [string, number, string];
jogadores = ["ha", 3, "ha"];

// enums - Algo como um set fechado de valores a serem escolhidos
enum aprovacao {
  yes,
  no,
}
// Nesse caso o item yes é 0, no 1 e assim por diante
enum tiposPC {
  Mac = "Mac",
  PC = "Windows",
}
const pc: tiposPC = tiposPC.Mac;

// Any - basciamente anula a tipagem do TS, só deve ser usado em casos especificos
// como por exemplo erro de API quando vc não sabe o que virá
const pcs: any[] = ["Mac"]

// Void - Tipo de uma função que não retorna nada. 
// Não é muito utilizado pois o TS infere isso caso
// a função não possua retorno
function print(msg: string): void {
  console.log(msg)
}
// Sem o tipo tbm funciona
function print(msg: string) {
  console.log(msg)
}

// Undefined, null
const u: undefined = undefined
const n: null = null

// Object - objeto
function print2(obj: object) {
  console.log(obj)
} 

// Union types - quando algo pode ter mais de um tipo
let nota: number | string = 10 // ok
nota = "10" // also ok