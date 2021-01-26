
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const result = new ListNode()
  let item = result
  let carry = 0

  while(true) {
    const sum = l1.val + l2.val + carry
    item.val = sum % 10
    carry = Math.floor(sum / 10)

    l1 = l1.next || new ListNode()
    l2 = l2.next || new ListNode()
    if (!l1.val && !l2.val && !l1.next && !l2.next) {
      if (carry) item.next = new ListNode(carry)
      break
    } else {
      item.next = new ListNode()
    }

    item = item.next
  }

  return result
}

function array2ListNode(array) {
  const result = new ListNode(array[0])
  let item = result

  for (let i = 1; i < array.length; i++) {
    const num = array[i]
    item.next = new ListNode(num)
    item = item.next
  }

  return result
}

const assert = require('assert').strict

let l1, l2, answer

l1 = array2ListNode([2, 4, 3])
l2 = array2ListNode([5, 6, 4])
answer = array2ListNode([7, 0, 8])
assert.deepStrictEqual(addTwoNumbers(l1, l2), answer)

l1 = array2ListNode([0])
l2 = array2ListNode([0])
answer = array2ListNode([0])
assert.deepStrictEqual(addTwoNumbers(l1, l2), answer)

l1 = array2ListNode([9,9,9,9,9,9,9])
l2 = array2ListNode([9,9,9,9])
answer = array2ListNode([8,9,9,9,0,0,0,1])
assert.deepStrictEqual(addTwoNumbers(l1, l2), answer)

l1 = array2ListNode([6,4,5,0,4,4,9,4,1])
l2 = array2ListNode([3,8,8,0,3,0,1,4,8])
answer = array2ListNode([9,2,4,1,7,4,0,9,9])
assert.deepStrictEqual(addTwoNumbers(l1, l2), answer)

console.log('Done')
