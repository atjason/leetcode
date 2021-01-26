/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const length = nums.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

const assert = require('assert').strict

let nums, target, answer

nums = [2,7,11,15]
target = 9
answer = [0,1]
assert.deepStrictEqual(twoSum(nums, target), answer)

nums = [3,2,4]
target = 6
answer = [1,2]
assert.deepStrictEqual(twoSum(nums, target), answer)

nums = [3,3]
target = 6
answer = [0,1]
assert.deepStrictEqual(twoSum(nums, target), answer)

nums = [2,5,5,11]
target = 10
answer = [1,2]
assert.deepStrictEqual(twoSum(nums, target), answer)