/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let subStr = ''
  const length = s.length

  let reversed = ''
  for (let i = length - 1; i >= 0; i--) {
    reversed += s[i]
  }

  for (let i = 0; i < length; i++) {
    for (let j = length - 1; j >= i; j--) {
      const sub = s.substring(i, j + 1)
      const reversedSub = reversed.substring(length - j - 1, length - i)
      if (sub == reversedSub) {
        if (sub.length > subStr.length) {
          subStr = sub
        }
      }
    }
  }

  return subStr
}

var longestPalindrome2 = function(s) {
  let maxLength = 0, subStr = ''
  const length = s.length
  for (let i = 0; i < length; i++) {
    for (let j = length - 1; j >= i; j--) {
      if (s[i] === s[j]) {
        let isPalindrome = true

        for (let n = 1, max = Math.floor((j - i) / 2); n <= max; n++) {
          if (s[i + n] !== s[j - n]) {
            isPalindrome = false
            break
          }
        }

        if (isPalindrome) {
          const subLength = j - i + 1
          if (subLength > maxLength) {
            maxLength = subLength
            subStr = s.substring(i, j + 1)
          }
        }
      }
    }
  }

  return subStr
}

const assert = require('assert').strict

let s, answer

s = 'babad'
answer = 'bab'
assert.deepStrictEqual(longestPalindrome(s), answer)

s = 'cbbd'
answer = 'bb'
assert.deepStrictEqual(longestPalindrome(s), answer)

s = 'a'
answer = 'a'
assert.deepStrictEqual(longestPalindrome(s), answer)

s = 'ac'
answer = 'a'
assert.deepStrictEqual(longestPalindrome(s), answer)

console.log('Done')