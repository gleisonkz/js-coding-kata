/* Kata Nível 8 kyu - Lario and Muigi Pipe Problem

Questão
Parece que um encanador rufião e seu irmão andaram por aí danificando seus estágios novamente.

Os tubos que conectam os estágios do seu nível precisam ser consertados antes que você receba mais reclamações. 
Cada pipe deve estar conectando, pois os níveis sobem, 

você pode assumir que cada número na sequência após o primeiro índice será maior que o anterior e que não haverá duplicados.


Dada a lista de números, retorne a lista para que os valores sejam incrementados em 1 para cada índice até o valor máximo.

Exemplo
Entrada: 1,3,5,6,7,8
Saída: 1,2,3,4,5,6,7,8

*/

function pipeFix(numbers) {}

{
  // Teste 1
  const sample = [1, 2, 3, 5, 6, 8, 9];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(pipeFix(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2
  const sample = [6, 9];
  const expected = [6, 7, 8, 9];
  console.log(pipeFix(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  function compareArrays(arr1, arr2) {
    if (arr1?.length === arr2?.length) {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  const resultFn = pipeFix(sample);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}
