/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sign = Math.sign(x)
  const str = Math.abs(x) + ''

  let reversedStr = ''
  for (let char of str) {
    reversedStr = char + reversedStr
  }

  const num = sign * parseInt(reversedStr)
  if (num > (Math.pow(2, 31) - 1) || num < -Math.pow(2, 31)) {
    return 0
  } else {
    return num
  }
}

const assert = require('assert').strict

let x, answer

x = 123
answer = 321
assert.deepStrictEqual(reverse(x), answer)

x = -123
answer = -321
assert.deepStrictEqual(reverse(x), answer)

x = 120
answer = 21
assert.deepStrictEqual(reverse(x), answer)

x = 0
answer = 0
assert.deepStrictEqual(reverse(x), answer)

x = 1534236469
answer = 0
assert.deepStrictEqual(reverse(x), answer)

x = -1534236469
answer = 0
assert.deepStrictEqual(reverse(x), answer)

console.log('Done')