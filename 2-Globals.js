//Modules
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
// const secret = 'SUPER SECRET'
// const sewa = 'Adesewa'
// const kemi = 'Kemilola'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const item = require('./6-alternative-exports.js')

require('./7-mind-grenade.js')
// console.log(add)

//console.log(item)

// console.log(names)

// sayHi('Kelvin')
// sayHi(names.sewa)
// sayHi(names.kemi)