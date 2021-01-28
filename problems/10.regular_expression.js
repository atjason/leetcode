/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
};

const assert = require('assert').strict

let s, p, answer

s = 'aa'
p = 'a'
answer = false
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aa'
p = 'a*'
answer = true
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aa'
p = '.*'
answer = true
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aa'
p = '.*b'
answer = false
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aab'
p = '.*b'
answer = false
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aab'
p = '.*ab'
answer = false
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aabc'
p = '.*ab.*'
answer = false
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aaababab'
p = '.*ab'
answer = false
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aab'
p = 'a*b'
answer = false
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aab'
p = 'a*ab'
answer = false
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'aab'
p = 'c*a*b'
answer = true
assert.deepStrictEqual(isMatch(s, p), answer)

s = 'mississippi'
p = 'mis*is*p*.'
answer = false
assert.deepStrictEqual(isMatch(s, p), answer)

console.log('Done')