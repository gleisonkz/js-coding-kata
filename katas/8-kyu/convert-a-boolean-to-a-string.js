/*

Kata Nível 8 kyu - Convert a Boolean to a String.

Implemente a função abaixo que deve converter um valor booleano fornecido
em sua representação de string. 

Nota: Apenas entradas válidas serão fornecidas.

*/

function booleanToString(bool) {}

{
  // Teste 1 deve retornar "true"
  const sample = true;
  const expected = "true";
  console.log(booleanToString(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar "false"
  const sample = false;
  const expected = "false";
  console.log(booleanToString(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  return booleanToString(sample) === expected ? "OK" : "Algo deu errado";
}
