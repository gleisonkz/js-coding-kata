/* Kata Nível 8 kyu - Will you make it?

Questão
Você estava acampando com seus amigos longe de casa, mas quando chega a hora de voltar, percebe que seu combustível está acabando 
e a bomba mais próxima fica a 50 milhas de distância! 
Você sabe que, em média, seu carro roda cerca de 25 milhas por galão. Restam 2 galões. 

Considerando esses fatores, escreva uma função que diga se é possível chegar à bomba ou não. 

A função deve retornar true se for possível e false se não for. 

Os valores de entrada são sempre positivos.
*/

const zeroFuel = (distanceToPump, milesPerGallon, fuelLeft) => {
  const reachableDistance = milesPerGallon * fuelLeft;
  return reachableDistance >= distanceToPump;
};

const targetTestFn = zeroFuel;

{
  // Teste 1
  const [distanceToPump, milesPerGallon, fuelLeft] = [50, 25, 2];
  const expected = true;
  console.log(targetTestFn(distanceToPump, milesPerGallon, fuelLeft));
  console.log(assert(distanceToPump, milesPerGallon, fuelLeft, expected));
}

{
  // Teste 2
  const [distanceToPump, milesPerGallon, fuelLeft] = [100, 50, 1];
  const expected = false;
  console.log(targetTestFn(distanceToPump, milesPerGallon, fuelLeft));
  console.log(assert(distanceToPump, milesPerGallon, fuelLeft, expected));
}

function assert(distanceToPump, milesPerGallon, fuelLeft, expected) {
  return targetTestFn(distanceToPump, milesPerGallon, fuelLeft) === expected ? "OK" : "Algo deu errado";
}
