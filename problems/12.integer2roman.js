/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const symbolList = ['I','V','X','L','C','D','M']
  let symbolIndex = 0
  let result = ''

  while(num >= 1) {
    let part

    const n = num % 10
    if (n <= 3) {
      part = symbolList[symbolIndex].repeat(n)
    } else if (n === 4) {
      part = symbolList[symbolIndex] + symbolList[symbolIndex + 1]
    } else if (n < 9) {
      part = symbolList[symbolIndex + 1] + symbolList[symbolIndex].repeat(n - 5)
    }else if (n === 9) {
      part = symbolList[symbolIndex] + symbolList[symbolIndex + 2]
    }

    result = part + result

    num = Math.floor(num / 10)
    symbolIndex += 2
  }

  return result
}

const assert = require('assert').strict

let num, answer

num = 3
answer = 'III'
assert.deepStrictEqual(intToRoman(num), answer)

num = 4
answer = 'IV'
assert.deepStrictEqual(intToRoman(num), answer)

num = 9
answer = 'IX'
assert.deepStrictEqual(intToRoman(num), answer)

num = 58
answer = 'LVIII'
assert.deepStrictEqual(intToRoman(num), answer)

num = 1994
answer = 'MCMXCIV'
assert.deepStrictEqual(intToRoman(num), answer)

console.log('Done')