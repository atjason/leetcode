/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function(heights) {
  let area = 0
  const length = heights.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      const tmpArea = (j - i) * Math.min(heights[i], heights[j])
      area = Math.max(area, tmpArea)
    }
  }

  return area
}

const assert = require('assert').strict

let heights, answer

heights = [1,1]
answer = 1
assert.deepStrictEqual(maxArea(heights), answer)

heights = [4,3,2,1,4]
answer = 16
assert.deepStrictEqual(maxArea(heights), answer)

heights = [1,2,1]
answer = 2
assert.deepStrictEqual(maxArea(heights), answer)

heights = [1,8,6,2,5,4,8,3,7]
answer = 49
assert.deepStrictEqual(maxArea(heights), answer)

console.log('Done')