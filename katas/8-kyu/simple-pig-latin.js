/*

Kata Nível 8 kyu - Simple Pig Latin

Mova a primeira letra de cada palavra até o final e adicione "ay" ao final da palavra.
Deixe as marcas de pontuação intactas.

Exemplos: 

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str) {
  const words = str.split(" ");

  const pigWord = (word) => {
    const isPunctuation = /[^\w\s]/.test(word);
    if (isPunctuation) return word;

    const [firstLetter, ...restLetters] = word;
    return `${restLetters.join("")}${firstLetter}ay`;
  };

  const piggedWords = words.map(pigWord);
  return piggedWords.join(" ");
}

function pigIt(str) {
  return str.replace(/(\w)(\w*)/g, "$2$1ay");
}

{
  // Teste 1
  const sample = "Pig latin is cool";
  const expected = "igPay atinlay siay oolcay";
  console.log(pigIt(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2
  const sample = "This is my string";
  const expected = "hisTay siay ymay tringsay";
  console.log(pigIt(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3
  const sample = "Hello world !";
  const expected = "elloHay orldway !";
  console.log(pigIt(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  return pigIt(sample) === expected ? "OK" : "Algo deu errado";
}
