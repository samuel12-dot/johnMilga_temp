//Modules
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-exports.js')
require('./7-mind-grenade.js')
sayHi('Kelvin')
sayHi(names.sewa)
sayHi(names.kemi)