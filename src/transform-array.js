const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (arr instanceof Array === false) throw (new Error("'arr' parameter must be an instance of the Array!"))
  
  let commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  let copy = arr.slice()

  
    for (let i = 0; i < copy.length - 1; i++) {
    
  	if (copy[i] === "--double-next" && typeof copy[i + 1]  === 'number') {
      	copy.splice(i + 1, 0, copy[i + 1]) 
        continue
      } 
    	
    
    else if (copy[i] === "--double-prev" && typeof copy[i - 1] === 'number') {
      	copy.splice(i + 1, 0, copy[i - 1])
        continue   	
    }
    
    else if (copy[i] === "--discard-next" && typeof copy[i + 1]  === 'number') {
      	copy.splice(i + 1, 1)
        continue	
    }
    
    else if (copy[i] === "--discard-prev" && typeof copy[i - 1]  === 'number') {
      	copy.splice(i - 1, 1)
        continue
    }  
  
  }
  
  return copy.filter(i => commands.indexOf(i) === -1)
}

module.exports = {
  transform
};
