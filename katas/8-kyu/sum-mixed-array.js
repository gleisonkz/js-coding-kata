/*
Kata Nível 8 kyu - Sum Mixed Array

Dado um array de inteiros como strings e números, 
retorne a soma dos valores do array como se todos fossem números. 

Retorne sua resposta como um number.
*/

function sumMix(numbers) {}

{
  // Teste 1 deve retornar 22
  const sample = [9, 3, "7", "3"];
  const expected = 22;
  console.log(sumMix(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar 42
  const sample = ["5", "0", 9, 3, 2, 1, "9", 6, 7];
  const expected = 42;
  console.log(sumMix(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar 41
  const sample = ["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"];
  const expected = 41;
  console.log(sumMix(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = sumMix(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
