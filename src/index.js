const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  ' ': ' ',
};

function decode(expr) {
  let binarySymbols = []
  let binaryLetters
  let morseLetters
  let alphabetLetters
  let k = 0

  for (let i = 0; i < expr.length / 10; i++) {
    binarySymbols[i] = ''
    for (let j = k; j < expr.length; j++) {
      if (binarySymbols[i].length < 10) {
        binarySymbols[i] += expr[j]
        k++
      } else {
        break
      }
    }
  }

  binaryLetters = binarySymbols.map(symbol => symbol.slice(symbol.indexOf('1')))

  morseLetters = binaryLetters.map(letter => {
    let acc = ''

    for (let i = 0; i < letter.length; i += 2) {
      if (letter[i] + letter[i + 1] === '10') {
        acc += '.'
      } else if (letter[i] + letter[i + 1] === '11') {
        acc += '-'
      } else {
        acc += ' '
      }
    }

    return acc
  })

  alphabetLetters = morseLetters.map(alphabetLetter => {
    let acc = ''
    for (let key in MORSE_TABLE) {
      if (alphabetLetter === key) {
        acc += MORSE_TABLE[key]
      } else {
      }
    }
    return acc
  })

  return alphabetLetters.join('')
}

module.exports = {
  decode
}