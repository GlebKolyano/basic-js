const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
	chain: [],
  
  getLength() {
  	return this.chain.length  
  },
  addLink(value = '') {
  	if (value !== null && typeof value === 'object') {
  	      this.chain.push("( [object Object] )")
  	      return this
  	    } 
    this.chain.push(`( ${value} )`)
	  return this
  },
  removeLink(position) {
  	if (Number.isInteger(position) && position <= this.chain.length && position > 0) {
    	this.chain.splice(position - 1, 1)
      return this
    }	else {
      this.chain = []
      throw ( new Error("You can't remove incorrect link!"));
    }
    
  },
  reverseChain() {
  	this.chain.reverse()
    return this
  },
  finishChain() {
  	let str = ""
    str = this.chain.join("~~")
    this.chain = []
    return str
  }
};

module.exports = {
  chainMaker
};
