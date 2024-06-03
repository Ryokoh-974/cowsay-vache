const myProfil = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `je suis ${myProfil.firstname} et ici c'est mon  ${myProfil.campus}   `,
    e: "oO",
    T: "U "
}));

