/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let mergedArray = []
  if (!nums1.length) {
    mergedArray = nums2
  } else if (!nums2.length) {
    mergedArray = nums1
  } else {
    let i = 0, j = 0
    while(i < nums1.length || j < nums2.length) {
      if (i === nums1.length) {
        mergedArray.push(nums2[j++])
      } else if (j === nums2.length) {
        mergedArray.push(nums1[i++])
      } else {
        if (nums1[i] < nums2[j]) {
          mergedArray.push(nums1[i++])
        } else {
          mergedArray.push(nums2[j++])
        }
      }
    }
  }

  const length = mergedArray.length
  const index = Math.floor(length / 2)
  if (length % 2 === 0) {
    return (mergedArray[index - 1] + mergedArray[index]) / 2
  } else {
    return mergedArray[index]
  }
}

const assert = require('assert').strict

let nums1, nums2, answer

nums1 = [1,3]
nums2 = [2]
answer = 2
assert.deepStrictEqual(findMedianSortedArrays(nums1, nums2), answer)

nums1 = [1,2]
nums2 = [3,4]
answer = 2.5
assert.deepStrictEqual(findMedianSortedArrays(nums1, nums2), answer)

nums1 = [0,0]
nums2 = [0,0]
answer = 0
assert.deepStrictEqual(findMedianSortedArrays(nums1, nums2), answer)

nums1 = []
nums2 = [1]
answer = 1
assert.deepStrictEqual(findMedianSortedArrays(nums1, nums2), answer)

nums1 = [2]
nums2 = [2]
answer = 2
assert.deepStrictEqual(findMedianSortedArrays(nums1, nums2), answer)

console.log('Done')