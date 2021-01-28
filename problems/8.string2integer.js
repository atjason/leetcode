/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let sign = 1
  let numStr = ''
  let i = 0
  const length = s.length

  // Trim leading space.
  for (; i < length; i++) {
    if (s[i] !== ' ') break
  }

  // Read possible sign char.
  const signChar = s[i]
  if (signChar === '+' || signChar === '-') {
    sign = (signChar === '+') ? 1 : -1
    i++
  }

  // Read digit char.
  for (; i < length; i++) {
    char = s[i]

    if (char >= '0' && char <= '9') {
      numStr += char
    } else {
      break
    }
  }

  if (!numStr.length) return 0

  let num = sign * parseInt(numStr)

  // '2147483648'.length === 10
  if (numStr.length < 10) return num

  const max = Math.pow(2, 31) - 1
  if (num > max) {
    num = max
  } else {
    const min = -Math.pow(2, 31)
    if (num < min) {
      num = min
    }
  }

  return num
}

var myAtoi2 = function(s) {
  let sign
  let numStr = ''

  for (let char of s) {
    if (char === ' ') {
      if (sign || numStr.length) {
        break
      } else {
        continue
      }
    }

    if (!sign && !numStr.length && (char === '+' || char === '-')) {
      sign = (char === '+') ? 1 : -1
      continue
    }

    if (char >= '0' && char <= '9') {
      numStr += char
    } else {
      break
    }
  }

  if (!numStr.length) return 0

  let num = (sign || 1) * parseInt(numStr)

  const max = Math.pow(2, 31) - 1
  if (num > max) {
    num = max
  } else {
    const min = -Math.pow(2, 31)
    if (num < min) {
      num = min
    }
  }

  return num
}

const assert = require('assert').strict

let s, answer

s = '42'
answer = 42
assert.deepStrictEqual(myAtoi(s), answer)

s = '   -42'
answer = -42
assert.deepStrictEqual(myAtoi(s), answer)

s = '4193 with words'
answer = 4193
assert.deepStrictEqual(myAtoi(s), answer)

s = 'words and 987'
answer = 0
assert.deepStrictEqual(myAtoi(s), answer)

s = '-91283472332'
answer = -2147483648
assert.deepStrictEqual(myAtoi(s), answer)

s = '00000-42a1234'
answer = 0
assert.deepStrictEqual(myAtoi(s), answer)

s = '  +  413'
answer = 0
assert.deepStrictEqual(myAtoi(s), answer)

console.log('Done')