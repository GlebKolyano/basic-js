const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false

  members = members
  						.filter(i => typeof i === "string")
  						.map(i => i.toLowerCase().trim()).sort()

  if (members.length === 0) return false
  
  return members.reduce((team, name) => {
  	return team += name.toUpperCase()[0]
  }, '')
}

module.exports = {
  createDreamTeam
};
