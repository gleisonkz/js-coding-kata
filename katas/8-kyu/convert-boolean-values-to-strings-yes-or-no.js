/*

Kata Nível 8 kyu - Convert boolean values to strings 'Yes' or 'No'.

Conclua o método que recebe um valor booleano e 
retorne uma string "Sim" para verdadeiro 
ou uma string "Não" para falso.

*/

function boolToWord(bool) {}

{
  // Teste 1 deve retornar "Yes"
  const sample = true;
  const expected = "Yes";
  console.log(boolToWord(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar "No"
  const sample = false;
  const expected = "No";
  console.log(boolToWord(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  return boolToWord(sample) === expected ? "OK" : "Algo deu errado";
}
