const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
 	constructor() {
  }
 	
  calculateDepth(arr, depth = 0) {
    this.maxDepth = 0
  	if (arr.length === 0) {
      return depth += 1
    }
	  depth += 1
    this.maxDepth = this.maxDepth < depth ? depth : this.maxDepth
    
  	arr.forEach((el) => {
    	if (Array.isArray(el)) {
				this.maxDepth = Math.max(this.maxDepth, this.calculateDepth(el, depth))  
      }  
    })
    return this.maxDepth
  }
}

module.exports = {
  DepthCalculator
};
