/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // const length = nums.length
  // for (let i = 0; i < length - 1; i++) {
  //   const remain = target - nums[i]
  //   for (let j = i + 1; j < length; j++) {
  //     if (nums[j] === remain) {
  //       return [i, j]
  //     }
  //   }
  // }

  const map = {}
  for (let i = 0, length = nums.length; i < length; i++) {
    const num = nums[i]
    const j = map[target - num]
    if (j === undefined) {
      map[num] = i
    } else {
      return [j, i]
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