//MODULES -> ENCAPSULATED CODE . WE ARE ONLY SHARING WHAT WE WANT. EVERY FILE IN NODE IS A MODULE

// console.log(__dirname)
// console.log(__filename)
// console.log(process)
const names = require('./names')
const sayHi = require('./utils')
const data = require('./6-alternative-export-flavour');

require('./mind-grenade')


// console.log(names);



// sayHi("Elvis");
// sayHi(names.john);
// sayHi(names.peter);

const os = require('os');

//INFO ABOUT CURRENT USER
const user = os.userInfo();
console.log(user)

//METHOD RETURNS THE SYSTEM UPTIME IN SECONDS
console.log(`The system utime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOs)