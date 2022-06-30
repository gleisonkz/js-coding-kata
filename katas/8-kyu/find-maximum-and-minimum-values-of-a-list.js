/*

Kata Nível 8 kyu - Find Maximum and Minimum Values of a List

Sua tarefa é fazer duas funções ( max e min ) que recebam uma lista de inteiros como entrada 
e retornem o maior e o menor número dessa lista.

Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Você pode considerar que não haverá matrizes/vetores vazios.
*/

const min = (list) => list.reduce((a, b) => Math.min(a, b));
const max = (list) => list.reduce((a, b) => Math.max(a, b));

{
  const samples = [-52, 56, 30, 29, -54, 0, -110];
  const expectedMin = -110;
  const output = min(samples);
  console.log(output);
  console.log(assert(output, expectedMin));
}
{
  const samples = [42, 54, 65, 87, 0];
  const expectedMin = 0;
  const output = min(samples);
  console.log(output);
  console.log(assert(output, expectedMin));
}
{
  const samples = [4, 6, 2, 1, 9, 63, -134, 566];
  const expectedMax = 566;
  const output = max(samples);
  console.log(output);
  console.log(assert(output, expectedMax));
}
{
  const samples = [5];
  const expectedMax = 5;
  const output = max(samples);
  console.log(output);
  console.log(assert(output, expectedMax));
}

function assert(output, expected) {
  const result = output === expected;
  return result ? "OK" : "Algo deu errado";
}
