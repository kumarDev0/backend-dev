import fs from "fs"

const writeStream = fs.createWriteStream("file3.txt" , {highWaterMark: 4})


// jab hum cork laga dete hai toh internal buffer hamara ram me hold ho jata hai hum write karne se rok dete hai 

writeStream.cork()

writeStream.write("he")
writeStream.write("hi")
writeStream.write("by")

writeStream.uncork()
// ab main chahta hu Ram se nikal ke disk me write kare toh hum uncork ka use krenge

writeStream.end()
console.log(writeStream.writableEnded)

setTimeout(() =>{
    console.log(writeStream.writableFinished)
    console.log(writeStream.writableEnded)
} ,10)

