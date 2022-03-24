const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
if (typeof options.separator !== "string") {
	options.separator = "+"
} else {
  options.separator = String(options.separator)
}
if (typeof options.additionSeparator !== "string") {
	options.additionSeparator = "|"
} else {
  options.additionSeparator = String(options.additionSeparator)
}

function recursRepeat(str = '', separator, repeatTimes = 1) {
  let resultArr = []

  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(String(str))
  }

  return resultArr.join(separator)
}

  let addition = recursRepeat(options.addition, options.additionSeparator, options.additionRepeatTimes)
  
  let mainString = recursRepeat(str, addition + options.separator , options.repeatTimes)

  return mainString + addition
}



module.exports = {
  repeater
};
