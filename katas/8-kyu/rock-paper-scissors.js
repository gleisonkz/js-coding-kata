/*

Kata Nível 8 kyu - Rock Paper Scissors

Vamos jogar! 
Você tem que retornar qual jogador ganhou! Em caso de empate devolver Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/

const rps = (p1, p2) => {};

{
  //Teste 1
  const [a, b] = ["scissors", "paper"];
  const expected = "Player 1 won!"; // valor esperado

  console.log(rps(a, b));
  console.log(assert(a, b, expected));
}
{
  //Teste 2
  const [a, b] = ["paper", "paper"];
  const expected = "Draw!"; // valor esperado

  console.log(rps(a, b));
  console.log(assert(a, b, expected));
}
{
  //Teste 3
  const [a, b] = ["scissors", "scissors"];
  const expected = "Draw!"; // valor esperado

  console.log(rps(a, b));
  console.log(assert(a, b, expected));
}
{
  //Teste 4
  const [a, b] = ["rock", "paper"];
  const expected = "Player 2 won!"; // valor esperado

  console.log(rps(a, b));
  console.log(assert(a, b, expected));
}
{
  //Teste 5
  const [a, b] = ["rock", "scissors"];
  const expected = "Player 1 won!"; // valor esperado

  console.log(rps(a, b));
  console.log(assert(a, b, expected));
}
{
  //Teste 6
  const [a, b] = ["paper", "rock"];
  const expected = "Player 1 won!"; // valor esperado

  console.log(rps(a, b));
  console.log(assert(a, b, expected));
}
{
  //Teste 7
  const [a, b] = ["scissors", "rock"];
  const expected = "Player 2 won!"; // valor esperado

  console.log(rps(a, b));
  console.log(assert(a, b, expected));
}

function assert(a, b, expected) {
  const resultFn = rps(a, b);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
