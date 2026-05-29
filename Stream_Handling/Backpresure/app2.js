
// Readable stream Automatically close ho jati hai 
// Lekin Writable Stream ko hame close karna parta hai 

import fs from "fs"

const writeStream = fs.createWriteStream('file2.txt', { highWaterMark: 4 })

writeStream.write('A')
writeStream.write('A')

writeStream.write('A')
writeStream.write('A')

writeStream.end() // it is very important

writeStream.on('finish', () => {
    console.log("Finished")
})

writeStream.on("close", () => {
    console.log("Closed ")
})

