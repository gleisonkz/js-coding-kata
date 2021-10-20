/*

    Kata Nível 5 kyu - Trapping Rain Water
    
    Dada um array de alturas que contém alguns inteiros não negativos. 
    Ele representa um mapa de elevação onde a largura de cada barra é 1. 
    Calcule quanta água ele é capaz de reter depois de chover. 
    Dificíl de entender? Veja um exemplo:

    heights = [1,0,2,1,0,1,3,2,1,2,1]
    Representando um mapa de elevação como este:

                H
        H       H H   H
    H   H H   H H H H H H
    1 0 2 1 0 1 3 2 1 2 1

    Onde pode prender a chuva? 
    Preste atenção à posição do *

                H
        H * * * H H * H
    H * H H * H H H H H H
    1 0 2 1 0 1 3 2 1 2 1

    Portanto, este caso de teste deve retornar 6 ;-)
*/

function trapWater(heights) {
  let waterCount = 0;
  let maxLeftHeight = 0;
  let maxRightHeight = 0;
  let leftIndex = 0;
  let rightIndex = heights.length - 1;

  const updateMaxLeftHeight = (currentLeftHeight) => {
    maxLeftHeight = Math.max(maxLeftHeight, currentLeftHeight);
    waterCount += maxLeftHeight - currentLeftHeight;
    leftIndex++;
  };

  const updateMaxRightHeight = (currentRightHeight) => {
    maxRightHeight = Math.max(maxRightHeight, currentRightHeight);
    waterCount += maxRightHeight - currentRightHeight;
    rightIndex--;
  };

  while (leftIndex < rightIndex) {
    const currentLeftHeight = heights[leftIndex];
    const currentRightHeight = heights[rightIndex];

    if (currentLeftHeight <= currentRightHeight) {
      updateMaxLeftHeight(currentLeftHeight);
      continue;
    }
    updateMaxRightHeight(currentRightHeight);
  }

  return waterCount;
}

{
  //Teste 1
  const sample = [1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  const expected = 6; // valor esperado

  console.log(trapWater(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 2
  const sample = [10, 0, 10];
  const expected = 10; // valor esperado

  console.log(trapWater(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 3
  const sample = [0, 10, 0];
  const expected = 0; // valor esperado

  console.log(trapWater(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = trapWater(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
