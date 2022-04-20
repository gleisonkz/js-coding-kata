/*

Kata Nível 6 Kyu - "this" is an other solution

No kata anterior this-is-an-other-problem, tentamos criar um objeto com propriedades mutáveis.

A função NamedOne pegava o primeiro e o último nomes como parâmetros 
e retornava um objeto com as propriedades firstName, lastName 
e fullName (= firstName + um espaço + lastName). Essas propriedades eram mutáveis.

Se, por exemplo, tivermos um "NamedOne" como este:

var namedOne = new NamedOne("Naomi","Wang")
namedOne.fullName  // -> "Naomi Wang"

... era possível alterar suas propriedades:

namedOne.firstName = "John" 
namedOne.lastName = "Doe"
namedOne.fullName  // -> "John Doe" 

//..ou ..

namedOne.fullName = "Bill Smith"
namedOne.firstName // -> "Bill" 
namedOne.lastName // -> "Smith"

Sua missão:

Ao contrário do anterior, o propósito deste kata é criar um objeto com a função OnceNamedOne 
que possui propriedades imutáveis. Isso significa que .firstName, .lastName e .fullName
são definidos no Construtor e não podem ser mais alterados.

As propriedades ainda podem ser lidas usando a notação de ponto ou colchete, 
mas não podem ser gravadas.

Exemplos:

var onceNamed = new OnceNamedOne("Naomi","Wang")

// ...então...
onceNamed.firstName // -> "Naomi"
onceNamed.lastName  // -> "Wang"
onceNamed.fullName // -> "Naomi Wang"

// ...se você tentar : ...
onceNamed.firstName = "Bill"
// ...ou...
onceNamed['lastName'] = "Smith"

// ...então...
onceNamed['firstName'] // -> "Naomi"
onceNamed['lastName']  // -> "Wang"
onceNamed['fullName'] // -> "Naomi Wang"

// ..mas você ainda pode criar novas instâncias..
var otherOne = new OnceNamedOne("Don","Jones")
otherOne.fullName // -> "Don Jones"

Você pode alterar nossa função para conter esse comportamento?
*/

function OnceNamedOne(first, last) {
  const self = this;

  Object.defineProperty(self, "fullName", {
    get() {
      return `${self.firstName} ${self.lastName}`;
    },
  });
  Object.defineProperty(self, "firstName", {
    value: first,
    writable: false,
  });
  Object.defineProperty(self, "lastName", {
    value: last,
    writable: false,
  });
}

{
  // Teste 1
  const sample = new OnceNamedOne("John", "Doe");
  const expected = "John Doe";
  console.log(sample.fullName);
  console.log(assert(sample.fullName, expected));
}
{
  // Teste 2
  const sample = new OnceNamedOne("John", "Doe");
  sample.firstName = "Bill";

  const expectedName = "John";
  const expectedFullName = "John Doe";

  console.log(sample.firstName);
  console.log(sample.fullName);

  console.log(assert(sample.firstName, expectedName));
  console.log(assert(sample.fullName, expectedFullName));
}
{
  // Teste 3
  const sample = new OnceNamedOne("John", "Doe");
  sample.firstName = "Bill";
  sample.lastName = "Board";

  const expectedLastName = "Doe";
  const expectedFullName = "John Doe";

  console.log(sample.lastName);
  console.log(sample.fullName);

  console.log(assert(sample.lastName, expectedLastName));
  console.log(assert(sample.fullName, expectedFullName));
}
{
  // Teste 4
  const sample = new OnceNamedOne("John", "Doe");
  sample.fullName = "Giovanni Cohen";

  const expectedFirstName = "John";
  const expectedLastName = "Doe";

  console.log(sample.firstName);
  console.log(sample.lastName);

  console.log(assert(sample.firstName, expectedFirstName));
  console.log(assert(sample.lastName, expectedLastName));
}

function assert(sample, expected) {
  return sample === expected ? "OK" : "Algo deu errado";
}
