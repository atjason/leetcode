/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) return s
  
  const length = s.length
  let matrix = []
  const repeats = Math.ceil(length / numRows * 2)
  for (let i = 0; i < numRows; i++) {
    matrix.push(Array(repeats))
  }

  let col = 0, index = 0
  while(index < length) {
    if (col % (numRows - 1) === 0) {
      for (let row = 0; row < numRows; row++) {
        matrix[row][col] = s[index++]
      }
    } else {
      const row = numRows - (col % (numRows - 1)) - 1
      matrix[row][col] = s[index++]
    }
    col += 1
  }

  let result = ''
  for (let subStr of matrix) {
    for (let char of subStr) {
      if (char) result += char
    }
  }
  return result
}

const assert = require('assert').strict

let s, numRows, answer

s = 'A'
numRows = 1
answer = 'A'
assert.deepStrictEqual(convert(s, numRows), answer)

s = 'PAYPALISHIRING'
numRows = 3
answer = 'PAHNAPLSIIGYIR'
assert.deepStrictEqual(convert(s, numRows), answer)

s = 'PAYPALISHIRING'
numRows = 4
answer = 'PINALSIGYAHRPI'
assert.deepStrictEqual(convert(s, numRows), answer)

console.log('Done')
