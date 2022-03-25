const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let arr = []
  n = n.toString().split('').map(i => Number(i))

  for (let i = 0; i < n.length; i++) {
  
  	let copy = [...n]       
    copy.splice(i, 1)
    arr.push(copy) 
    
  }
  return Math.max(...arr.map(a => Number(a.join(''))))
}

module.exports = {
  deleteDigit
};
