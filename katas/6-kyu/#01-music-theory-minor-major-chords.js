/*

Kata Nível 6 Kyu - #01 - Music theory - Minor/Major chords

Verifique se o acorde fornecido é menor ou maior.

Regras:

- O acorde menor/maior básico tem três elementos.

- O acorde é menor quando o intervalo entre o primeiro e o segundo elemento 
é igual a 3 e entre o segundo e o terceiro -> 4.

- O acorde é maior quando o intervalo entre o primeiro e o segundo elemento
é igual a 4 e entre o segundo e o terceiro -> 3.

No acorde menor/ maior, o intervalo entre o primeiro 
e o terceiro elemento é igual a ... 7.

Há uma array pré-definido das 12 notas de uma escala cromática construída em C. 
Isso significa que há (quase) todos os nomes de notas permitidos na música.

notes = 
[
  'C', ['C#', 'Db'], 
  'D', ['D#', 'Eb'], 
  'E', 
  'F, ['F#', 'Gb'], 
  'G', ['G# ','Ab'],
  'A', ['A# ','Bb'],
  'B'
]

Observe que as notas dentro dos sub-arrays são equivalentes

'C#' - 'C' = 1, 
'C' - 'C#' = 1, 
'Db' - 'C' = 1 e 
'B' - 'C' = 1.

Entrada: Sequência de notas separadas por espaços em branco, 
ex : 'A C# E'

Saída: Mensagem de string: 'Minor', 'Major' ou 'Not a chord'.

*/

function minorOrMajor(chord) {}

{
  // Teste 1
  const sample = "C E G";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2
  const sample = "Db F Ab";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3
  const sample = "D F# A";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 4
  const sample = "Eb G Bb";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 5
  const sample = "E G# B";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 6
  const sample = "F A C";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 7
  const sample = "F# A# C#";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 8
  const sample = "Gb Bb Db";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 9
  const sample = "G B D";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 10
  const sample = "Ab C Eb";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 11
  const sample = "A C# E";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 12
  const sample = "Bb D F";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 13
  const sample = "B D# F#";
  const expected = "Major";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 14
  const sample = "C Eb G";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 15
  const sample = "C# E G#";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 16
  const sample = "D F A";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 17
  const sample = "D# F# A#";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 18
  const sample = "Eb Gb Bb";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 19
  const sample = "E G B";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 20
  const sample = "F Ab C";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 21
  const sample = "F# A C#";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 22
  const sample = "G Bb D";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 23
  const sample = "G# B D#";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 24
  const sample = "A C E";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 25
  const sample = "Bb Db F";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 26
  const sample = "B D F#";
  const expected = "Minor";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 27
  const sample = "C D G";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 28
  const sample = "A C D";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 29
  const sample = "A C# D#";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 30
  const sample = "D F A G";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 31
  const sample = "D F";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 32
  const sample = "D F A C#";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 33
  const sample = "K L M";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 34
  const sample = "C A G";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 35
  const sample = "C H G";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 36
  const sample = "C A G";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 37
  const sample = "G E C";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 38
  const sample = "E C A";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 39
  const sample = "G# E C#";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 40
  const sample = "Bb Gb Eb";
  const expected = "Not a chord";
  console.log(minorOrMajor(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const result = minorOrMajor(sample);
  return expected === result ? "OK" : "Algo deu errado";
}
