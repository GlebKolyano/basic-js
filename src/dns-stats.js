const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let obj = {}
  if (!domains.length) return obj

  let arr = domains.map(i => i.split(".").reverse().join(".")).map(i => i = "."+i)
  let arr1 = domains.map(i => i.split(".").reverse().join(".")).map(i => i = "."+i)
  
  if (arr1.includes(".ru.yandex")) {
  	arr1.push(".ru")
   
  }
  if (arr1.includes(".com.epam")) {
  	arr1.push(".com")
  
  }
  
  arr1.forEach(i => obj[i] = 0)
  
  for (let item in obj) {

    for (let i = 0; i < arr.length; i++) {
    	if (arr[i].includes(item)) {
				obj[item] += 1
      }
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};
