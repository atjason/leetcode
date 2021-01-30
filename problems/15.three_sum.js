/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []

  nums = nums.sort((a, b) => a > b ? 1 : -1)
  const length = nums.length
  let result = []

  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let l = i + 1
    let r = length - 1
    while(l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum < 0) {
        l += 1
      } else if (sum > 0) {
        r -= 1
      } else {
        result.push([nums[i], nums[l], nums[r]])
        do {
          l += 1
        } while(l < r && nums[l] === nums[l - 1])
      }
    }
  }

  return result
}

var threeSum2 = function(nums) {
  const fixedSum = 0
  nums = nums.sort((a, b) => a > b ? 1 : -1)
  const length = nums.length
  const hashSet = new Set()
  let result = []

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const remain = fixedSum - (nums[i] + nums[j])

      for (let k = j + 1; k < length; k++) {
        if (nums[k] === remain) {
          const arr = [nums[i], nums[j], nums[k]]
          const hash = JSON.stringify(arr)
          if (!hashSet.has(hash)) {
            hashSet.add(hash)
            result.push(arr)
          }
          break
        } else if (nums[k] > remain) {
          break
        }
      }
    }
  }

  return result
}

const assert = require('assert').strict

let nums, answer

nums = [-1,0,1,2,-1,-4]
answer = [[-1,-1,2],[-1,0,1]]
assert.deepStrictEqual(threeSum(nums), answer)

nums = []
answer = []
assert.deepStrictEqual(threeSum(nums), answer)

nums = [0]
answer = []
assert.deepStrictEqual(threeSum(nums), answer)

nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
answer = [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
assert.deepStrictEqual(threeSum(nums), answer)

nums = [0,0,0,0,0,0,0]
answer = [[0,0,0]]
assert.deepStrictEqual(threeSum(nums), answer)

console.log('Done')