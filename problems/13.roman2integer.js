/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let num = 0
  for (let i = 0, length = s.length; i < length; i++) {
    const symbol = s[i]
    const unit = symbolMap[symbol]

    const nextSymbol = i < (length - 1) && s[i + 1]
    const nextUnit = nextSymbol && symbolMap[nextSymbol]
    
    if (nextUnit > unit) {
      num += nextUnit - unit
      i += 1
    } else {
      num += unit
    }
  }

  return num
}

const assert = require('assert').strict

let s, answer

s = 'III'
answer = 3
assert.deepStrictEqual(romanToInt(s), answer)

s = 'IV'
answer = 4
assert.deepStrictEqual(romanToInt(s), answer)

s = 'IX'
answer = 9
assert.deepStrictEqual(romanToInt(s), answer)

s = 'LVIII'
answer = 58
assert.deepStrictEqual(romanToInt(s), answer)

s = 'MCMXCIV'
answer = 1994
assert.deepStrictEqual(romanToInt(s), answer)

console.log('Done')