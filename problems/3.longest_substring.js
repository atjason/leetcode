
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0
  let startIndex = 0
  const map = {}

  for (let i = 0, length = s.length; i < length; i++) {
    const char = s[i]
    if (map[char] !== undefined) {
      startIndex = Math.max(startIndex, map[char] + 1)
    }
    
    map[char] = i
    maxLength = Math.max(maxLength, i - startIndex + 1)
  }

  return maxLength
}

var lengthOfLongestSubstring2 = function(s) {
  let maxLength = 0

  const length = s.length
  for (let i = 0; i < length; i++) {
    let set = new Set()
    
    for (let j = i; j < length; j++) {
      const char = s[j]
      if (set.has(char)) {
        break
      } else {
        set.add(char)
      }
    }

    maxLength = Math.max(maxLength, set.size)
  }

  return maxLength
}

const assert = require('assert').strict

let s, answer

// s = 'abcabcbb'
// answer = 3
// assert.deepStrictEqual(lengthOfLongestSubstring(s), answer)

// s = 'bbbbb'
// answer = 1
// assert.deepStrictEqual(lengthOfLongestSubstring(s), answer)

// s = 'pwwkew'
// answer = 3
// assert.deepStrictEqual(lengthOfLongestSubstring(s), answer)

// s = ''
// answer = 0
// assert.deepStrictEqual(lengthOfLongestSubstring(s), answer)

// s = ' '
// answer = 1
// assert.deepStrictEqual(lengthOfLongestSubstring(s), answer)

s = 'abba'
answer = 2
assert.deepStrictEqual(lengthOfLongestSubstring(s), answer)
