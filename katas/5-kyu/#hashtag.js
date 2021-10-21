/*

    Kata Nível 5 kyu - #Hashtag
    
    Você começa a trabalhar para uma nova startup chique na esperança 
    de revolucionar as redes sociais! GASP! Eles tiveram a grande 
    ideia de que os usuários deveriam ser capazes de especificar 
    palavras-chave relevantes para suas postagens usando uma ideia 
    engenhosa, prefixando essas palavras-chave com o sinal de sustenido (#).

    Seu trabalho é extrair essas palavras-chave para que possam ser usadas 
    posteriormente para quaisquer fins.

    Observação:

    - Os sinais de # por si só não contam, por exemplo: 
    a string "#" retornaria um array vazio.

    - Se uma palavra é precedida por mais de uma hashtag, 
    apenas a última hashtag conta:
    (por exemplo, "##alot" retornaria ["alot"])
    
    - As hashtags não podem estar no meio de uma palavra:
    (por exemplo, "in#line hashtag" retorna uma array vazio)

    - As hashtags devem preceder os caracteres alfabéticos:
    (por exemplo, "#120398" ou "#?" São inválidas)

    Entrada: string de palavras, onde algumas palavras podem conter uma hashtag.
    Saída: array de strings que foram prefixadas com a hashtag, mas não contêm a hashtag.
*/

function getHashtags(post) {
  return post
    .split(" ")
    .filter((word) => /(^#+[a-z]+$)/gi.test(word))
    .map((word) => word.replace(/#/g, ""));
}

{
  //Teste 1
  const sample = "Hello #world";
  const expected = ["world"]; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 2
  const sample = "#sorryNotSorry";
  const expected = ["sorryNotSorry"]; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 3
  const sample = "#123123123 #?";
  const expected = []; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 4
  const sample = "two hashs##in middle of word#";
  const expected = []; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 5
  const sample = "#lol #sorryNotSorry #heya #coolbeans";
  const expected = ["lol", "sorryNotSorry", "heya", "coolbeans"]; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 6
  const sample = "#blue#red#yellow#green";
  const expected = []; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 7
  const sample = "# # # #";
  const expected = []; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 8
  const sample = "invalid chars #$? #;wha";
  const expected = []; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 9
  const sample = "invalid chars #$? #;wha";
  const expected = []; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 10
  const sample = "";
  const expected = []; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 11
  const sample = "too ##many tags";
  const expected = ["many"]; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 12
  const sample = "too ###many tags";
  const expected = ["many"]; // valor esperado

  console.log(getHashtags(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = getHashtags(sample);
  const expectedLength = expected.length;

  function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  const itemsEqual = compareArrays(resultFn, expected);

  return resultFn.length === expectedLength && itemsEqual ? "OK" : "Algo deu errado";
}
