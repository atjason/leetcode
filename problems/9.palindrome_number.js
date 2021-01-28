/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true

  let numList = []
  while(x > 0) {
    numList.push(x % 10)
    x = Math.floor(x / 10)
  }

  const end = numList.length - 1
  for (let i = 0, lenth = end / 2; i < lenth; i++) {
    if (numList[i] !== numList[end - i]) return false
  }

  return true
}

var isPalindrome2 = function(x) {
  const str = x + ''
  const end = str.length - 1
  for (let i = 0, lenth = end / 2; i < lenth; i++) {
    if (str[i] !== str[end - i]) return false
  }

  return true
}

const assert = require('assert').strict

let x, answer

x = 121
answer = true
assert.deepStrictEqual(isPalindrome(x), answer)

x = -121
answer = false
assert.deepStrictEqual(isPalindrome(x), answer)

x = 10
answer = false
assert.deepStrictEqual(isPalindrome(x), answer)

x = 9234554329
answer = true
assert.deepStrictEqual(isPalindrome(x), answer)

console.log('Done')