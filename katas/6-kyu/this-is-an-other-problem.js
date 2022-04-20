/*

Kata Nível 6 Kyu - "this" is an other problem

O problema:

Tendo criado uma função chamada NamedOne que recebe o primeiro e o último nome como parâmetros 
e retorna um objeto com as propriedades firstName, lastName 
e fullName (= firstName + a space + lastName) que devem todos ser "acessíveis",
com "acessível" queremos dizer também "mutável".

Se, por exemplo, tivermos um "NamedOne" como este:

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"

... as propriedades podem ser alteradas:

namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"

... mas todas as propriedades não são atualizadas!

namedOne.fullName // -> "Naomi Wang" 
//-- Oh não ! queremos fullName == "John Doe" agora!

Sua missão:

Portanto, o objetivo deste kata é criar um objeto com propriedades 
acessíveis e "atualizáveis" (posso dizer isso?).

- Se .firstName ou .lastName forem alterados, 
então .fullName também deve ser alterado

- Se .fullName for alterado, .firstName e .lastName
também devem ser alterados.

Nota: o "formato de entrada" para .fullName será primeiroNome + espaço + últimoNome. 
Se o fullName fornecido não for válido, nenhuma propriedade deve ser alterada.

Exemplos:

var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...então...
namedOne.fullName // -> "John Doe"

// -- então :
namedOne.fullName = "Bill Smith"
// ...então...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- Mas :
namedOne.fullName = "Tom" // -> Não deve atualizar pois está faltando lastName 
namedOne.fullName = "TomDonnovan" // -> Não deve atualizar pois falta o espaço entre first & last names
namedOne.fullName // -> "Bill Smith" (sem alteração)


Você pode alterar nossa função para criar esse objeto NamedOne?
*/

function NamedOne(first, last) {}

{
  // Teste 1
  const sample = new NamedOne("John", "Doe");
  const expected = "John Doe";
  console.log(sample.fullName);
  console.log(assert(sample.fullName, expected));
}
{
  // Teste 2
  const sample = new NamedOne("John", "Doe");
  sample.firstName = "Bill";

  const expectedName = "Bill";
  const expectedFullName = "Bill Doe";

  console.log(sample.firstName);
  console.log(sample.fullName);

  console.log(assert(sample.firstName, expectedName));
  console.log(assert(sample.fullName, expectedFullName));
}
{
  // Teste 3
  const sample = new NamedOne("John", "Doe");
  sample.firstName = "Bill";
  sample.lastName = "Board";

  const expectedLastName = "Board";
  const expectedFullName = "Bill Board";

  console.log(sample.lastName);
  console.log(sample.fullName);

  console.log(assert(sample.lastName, expectedLastName));
  console.log(assert(sample.fullName, expectedFullName));
}
{
  // Teste 4
  const sample = new NamedOne("John", "Doe");
  sample.fullName = "Giovanni Cohen";

  const expectedFirstName = "Giovanni";
  const expectedLastName = "Cohen";

  console.log(sample.firstName);
  console.log(sample.lastName);

  console.log(assert(sample.firstName, expectedFirstName));
  console.log(assert(sample.lastName, expectedLastName));
}

function assert(sample, expected) {
  return sample === expected ? "OK" : "Algo deu errado";
}
