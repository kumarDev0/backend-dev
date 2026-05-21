
// Es6 module syntax with set type module in package.json

// import myvalue, { obj1, obj2, bool, str } from './timer.js' // here is not destucturing because we are importing default value as myvalue and other values as named import
// console.log(myvalue, { obj1, obj2, bool, str })

// Common js module syntax with set type commonjs in package.json

const { obj1, obj2, obj3, num, str, bool } = require('./timer.js') // here is destructuring 
console.log({ obj1, obj2, obj3, num, str, bool })