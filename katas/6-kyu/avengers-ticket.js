/*

Desafio Nível - 6 kyu

O novo filme dos "Vingadores" acaba de ser lançado! Há muitas pessoas na bilheteria 
do cinema em uma fila enorme. Cada um deles tem uma única nota de 100, 50 ou 25 dólares. 
Um ingresso para o filme "Avengers" custa 25 dólares.

John está trabalhando atualmente como caixa . 
Ele quer vender um ingresso para cada pessoa nesta fila.

John pode vender um ingresso para cada pessoa e dar o troco 
se ele inicialmente não tiver dinheiro e vender 
os ingressos estritamente na fila de espera das pessoas?

Retorne SIM, se John puder vender um ingresso para cada pessoa e dar o troco
com as notas que ele tem em mãos naquele momento. Caso contrário, retorne NÃO.

Exemplos:

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. John não terá dinheiro o suficiente para dar troco para 100 dólares
tickets([25, 25, 50, 50, 100]) // => NO. John não terá notas para dar 75 dólares de troco (você não pode fazer duas notas de 25 de uma de 50)

*/

function tickets(queue) {}

// Teste 1 deve retornar YES
const sample1 = [25, 25];
console.log(tickets(sample1));
console.log(assert(sample1, "YES"));

// Teste 2 deve retornar NO
const sample2 = [25, 100];
console.log(tickets(sample2));
console.log(assert(sample2, "NO"));

// Teste 3 deve retornar YES
const sample3 = [25, 25, 50];
console.log(tickets(sample3));
console.log(assert(sample3, "YES"));

// Teste 3 deve retornar YES
const sample4 = [25, 25, 25, 100];
console.log(tickets(sample4));
console.log(assert(sample4, "YES"));

// Teste 5 deve retornar NO
const sample5 = [25, 25, 50, 50, 100];
console.log(tickets(sample5));
console.log(assert(sample5, "NO"));

// Teste 6 deve retornar YES
const sample6 = [25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 50, 25, 100];
console.log(tickets(sample6));
console.log(assert(sample6, "YES"));

// Teste 7 deve retornar YES
const sample7 = [25, 25, 50, 100, 25, 25, 25, 100, 25, 50, 25, 100];
console.log(tickets(sample7));
console.log(assert(sample7, "YES"));

// Teste 8 deve retornar NO
const sample8 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
console.log(tickets(sample8));
console.log(assert(sample8, "NO"));

// Teste 9 deve retornar NO
const sample9 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
console.log(tickets(sample9));
console.log(assert(sample9, "NO"));

// Teste 10 deve retornar NO
const sample10 = [25, 50, 100, 25, 25, 25, 50];
console.log(tickets(sample10));
console.log(assert(sample10, "NO"));

// Teste 11 deve retornar YES
const sample11 = [25, 25, 25, 25, 50, 100, 50];
console.log(tickets(sample11));
console.log(assert(sample11, "YES"));

function assert(sample, expected) {
  return tickets(sample) === expected ? "OK" : "Algo deu errado";
}
