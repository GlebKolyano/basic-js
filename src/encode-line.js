const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('')
  let newStr = []

  for (let i = 0; i < str.length; i++) {
  	let count = 1
  	if (str[i] !== str[i - 1]) {
			for (let j = i + 1; j < str.length; j++) {
      	if (str[i] === str[j] && str[j - 1] === str[i]) {
        	count += 1
        }
      }
      if (count > 1) newStr.push(count)
      
      newStr.push(str[i])
    }
  }
  return newStr.join('')
}


module.exports = {
  encodeLine
};
