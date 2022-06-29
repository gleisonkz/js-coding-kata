/* Kata Nível 8 kyu - String Templates - Bug Fixing #5

Oh não! Timmy não seguiu as instruções com muito cuidado e esqueceu como usar o novo recurso String Template, 
Ajude Timmy com seu modelo de string para que funcione como ele espera!


Dada a lista de números, retorne a lista para que os valores sejam incrementados em 1 para cada índice até o valor máximo.

Exemplo
Entrada: 1,3,5,6,7,8
Saída: 1,2,3,4,5,6,7,8
*/

function buildString(...template) {
  return `I like #{template.join(',')}!`;
}

{
  const expected = "I like Cheese, Milk, Chocolate!";
  const output = buildString("Cheese", "Milk", "Chocolate");
  console.log(output);
  console.log(assert(output, expected));
}
{
  const expected = "I like Cheese, Milk!";
  const output = buildString("Cheese", "Milk");
  console.log(output);
  console.log(assert(output, expected));
}
{
  const expected = "I like Chocolate!";
  const output = buildString("Chocolate");
  console.log(output);
  console.log(assert(output, expected));
}

function assert(sample, expected) {
  const resultFn = buildString(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
