/*

Escreva um algoritmo que pegue uma matriz 
e mova todos os zeros até o final, 
preservando a ordem dos outros elementos.

*/

function moveZeros(array) {}

{
  // Teste 1 deve retornar [false,1,1,2,1,3,"a",0,0]
  const result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
  console.log(result);
}

{
  // Teste 2 deve retornar [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
  const result = moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
  console.log(result);
}
