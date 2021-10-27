/*

Kata Nível 6 Kyu - Find The Longest Substring and Required Data.

Temos que encontrar a substring mais longa de caracteres idênticos em uma string muito longa.
Vejamos um exemplo:

s1 = "1111aa994bbbb1111AAAAAFF?<mmMaaaaaaaaaaaaaaaaaaaaaaaaabf"

A substring mais longa em s1 é "aaaaaaaaaaaaaaaaaaaaaaaa" 
tendo um comprimento de 25, feito de caractere "a", com seu código ASCII correspondente 
igual a "97", e tendo seu índice inicial 29 e o final 53.

Expressamos os resultados usando uma array  na seguinte ordem: ["97", 25, [29,53]]

Os símbolos '!"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'que uma string pode ter 
serão considerados como ruído, então eles não pode ser uma solução, 
embora a substring, feita de um deles, seja a mais longa de todas.

Em outras palavras, os caracteres permitidos podem ser as letras maiúsculas 
ou minúsculas do alfabeto inglês ou os dígitos decimais ('0123456789')

Vamos ver um exemplo para mostrar o que acontece se tivermos símbolos não alfanuméricos.

s2 = "1111aa994bbbb1111AAAAAFF ????????????????????????" A substring 
mais longa é "AAAAA", então o resultado para ela é:

Se houver duas ou mais substrings com o valor de comprimento máximo, 
será escolhida aquela que começar primeiro, da esquerda para a direita.

Faça um código ágil que possa gerar um array como
o mostrado acima quando receber uma string enorme.

['65', 5, [17, 21]]

*/

function findLongestSubstr(string) {
  const pattern = /([a-zA-Z0-9])\1+/g;
  const matches = string.match(pattern);
  const longestMatch = matches.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
  });

  const beginIndex = string.indexOf(longestMatch);
  const endIndex = beginIndex + longestMatch.length - 1;
  const longestMatchCode = string.charCodeAt(beginIndex).toString();

  return [longestMatchCode, longestMatch.length, [beginIndex, endIndex]];
}

{
  // Teste 1
  const sample = "1111aa994bbbb1111AAAAAFF?<mmMaaaaaaaaaaaaaaaaaaaaaaaaabf";
  const expected = ["97", 25, [29, 53]];
  console.log(findLongestSubstr(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2
  const sample = "1111aa994bbbb1111AAAAAFF????????????????????????????";
  const expected = ["65", 5, [17, 21]];
  console.log(findLongestSubstr(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3
  const sample = "1111aa994bbbb1111AAAAAFFcfgBBBBB";
  const expected = ["65", 5, [17, 21]];
  console.log(findLongestSubstr(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const stringifiedSample = JSON.stringify(expected);
  const result = findLongestSubstr(sample);
  const stringifiedResult = JSON.stringify(result);
  return stringifiedSample === stringifiedResult ? "OK" : "Algo deu errado";
}
