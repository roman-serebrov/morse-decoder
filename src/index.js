const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    const DOTE = '10'
    const DASH = '11'
    let start = 0
    let count_symbol = 10
    const symbol = 2
    const arr = expr.split('')
    const res = []
    let item = arr.length / 10
    while(item > 0) {
      let strMorse = ''
      let strArrCode = arr.splice(start, count_symbol)
      if(strArrCode.join('') === '**********') {
        item--
        res.push(' ')
        continue
      }
      for(let i = 0; i<strArrCode.length; i+=symbol) {
        if(strArrCode.slice(i, i+symbol).join('') === DOTE) {
          strMorse += '.'
        }
        if(strArrCode.slice(i, i+symbol).join('') === DASH) {
          strMorse += '-'
        }
       
      }
      res.push(MORSE_TABLE[strMorse])
      item--
    }
      return res.join('')
    }
module.exports = {
    decode
}