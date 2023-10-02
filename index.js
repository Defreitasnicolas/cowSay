const objectA = require('./information.js')


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${objectA.name} ${objectA.campus}`,
    e : "oO",
    T : "U"
}));

