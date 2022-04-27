const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  typeMachine
  alphav = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  constructor(type = null) {
    
    if (type === false) {
      this.typeMachine = "reverse" 
    } else {
      this.typeMachine = "direct"
    }
  }

  vigenereCipher(message, keyWord, mode, isReverse = false) {
    let originalMessage = message.split('')
    
    message = message.toUpperCase().split("").filter(i => i.match(/^[a-z]+$/i))

    keyWord = keyWord.toUpperCase().split("")

	  let maxlength = message.length
    let result = ''

	  for(let i = 0; i < maxlength; i++){ 			
      let mi = this.alphav.indexOf( message[( (i >= message.length) ? i %message.length: i )])
            
		  let ki = this.alphav.indexOf( keyWord[( (i  >= keyWord.length) ? (i % keyWord.length)  : i )] )

      ki = (mode === "decrypt" ? (-ki): ki)

		  let letter = this.alphav[ ( ( ( this.alphav.length + ( mi + ki ) ) % this.alphav.length ) ) ]

		  result += letter;	
   														
    }
    
    result = result.split('')
    for (let i = 0; i < originalMessage.length; i++) {
     if (!originalMessage[i].match(/^[a-z]+$/i)) {
        let item = originalMessage[i]
        result.splice(i, 0, item)
     }
    }
    
    result = result.join('')

    if (isReverse === true) {
      result = result.split(' ').reverse().map(item => item.split('').reverse().join('')).join(' ') 
      return result
    } else {
      return result
    }  

  }

  encrypt(message, keyWord) {
    
    if (!message || !keyWord) {
      throw new Error("Incorrect arguments!")
    } else {
      if (this.typeMachine === "direct") {
        return this.vigenereCipher(message, keyWord, "encrypt")
      } else {
        return this.vigenereCipher(message, keyWord, "encrypt", true) 
      }
    }
  }
  decrypt(message, keyWord) {
    if (!message || !keyWord) {
      throw new Error("Incorrect arguments!")
    } else {
       if (this.typeMachine === "direct") {
        return this.vigenereCipher(message, keyWord, "decrypt") 
      } else {
        return this.vigenereCipher(message, keyWord, "decrypt", true) 
      }
    }
  }
}


let directMachine = new VigenereCipheringMachine(false)

console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))


module.exports = {
  VigenereCipheringMachine
};
