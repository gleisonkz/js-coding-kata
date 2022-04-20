/*

Kata Nível 8 kyu - The Feast of Many Beasts

Todos os animais estão dando uma festa! Cada animal está trazendo um prato. 

A regra é única: 
o prato deve começar e terminar com as mesmas letras do nome do animal. 
Por exemplo, a garça azul está trazendo alho naan e o chapim traz bolo de chocolate.

Implemente a função fest abaixo que leva o nome do animal e prato como argumentos 
e retorna verdadeiro ou falso para indicar se o animal tem permissão 
para trazer o prato para o banquete.

Suponha que beast e dish (prato) sejam sempre strings em minúsculas e 
que cada um tenha pelo menos duas letras. 

beast (animal) e dish (prato) podem conter hífens e espaços, 
mas não aparecerão no início ou no final da string. Eles não conterão numerais.



*/
function feast(beast, dish) {}

{
  // Teste 1 deve retornar true
  const [beast, dish] = ["great blue heron", "garlic naan"];
  const expected = true;
  console.log(feast(beast, dish));
  console.log(assert(beast, dish, expected));
}

{
  // Teste 2 deve retornar true
  const [beast, dish] = ["chickadee", "chocolate cake"];
  const expected = true;
  console.log(feast(beast, dish));
  console.log(assert(beast, dish, expected));
}

{
  // Teste 3 deve retornar false
  const [beast, dish] = ["brown bear", "bear claw"];
  const expected = false;
  console.log(feast(beast, dish));
  console.log(assert(beast, dish, expected));
}

function assert(beast, dish, expected) {
  return feast(beast, dish) === expected ? "OK" : "Algo deu errado";
}
