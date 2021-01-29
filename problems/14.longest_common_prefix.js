/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''

  let commonCount = strs[0].length
  for (let str of strs) {
    commonCount = Math.min(commonCount, str.length)
  }

  let common = ''
  for (let i = 0; i < commonCount; i++) {
    let isCommon = true
    for (let j = 0, length = strs.length; j < (length - 1); j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        isCommon = false
        break
      }
    }
    if (isCommon) {
      common += strs[0][i]
    } else {
      break
    }
  }
  return common
}

const assert = require('assert').strict

let strs, answer

strs = []
answer = ''
assert.deepStrictEqual(longestCommonPrefix(strs), answer)

strs = ["","flow","flight"]
answer = ''
assert.deepStrictEqual(longestCommonPrefix(strs), answer)

strs = ["flower","flow","flight"]
answer = 'fl'
assert.deepStrictEqual(longestCommonPrefix(strs), answer)

strs = ["dog","racecar","car"]
answer = ''
assert.deepStrictEqual(longestCommonPrefix(strs), answer)

console.log('Done')