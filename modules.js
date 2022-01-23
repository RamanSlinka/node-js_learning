const os = require('os')
const {userName: user, sayHi} = require('./test');

const name = 'Robert'

console.log(sayHi(name));
console.log(os.platform(), os.release());

module.exports = name;