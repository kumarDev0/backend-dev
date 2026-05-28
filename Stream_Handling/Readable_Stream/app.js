// import { readFile, writeFile } from 'node:fs/promises'
// we can read any file like this 
// const buffer = await fs.readFile('chars.txt')
// console.log(buffer.toString())
// console.log(buffer.byteLength)

//--------------------------


// i want to read Big file 
// time = 5sec
// RAM use = 1.8GB
// CPU use 5%
// console.time()
// const buffer = await fs.readFile("C:\\Users\\VILLAN\\OneDrive\\Desktop\\buffer.mp4.mkv")

// await fs.readFile('buffer.mp4.mkv', buffer)
// console.timeEnd()

// -----------------------------------

// using Stream isme bhi memory jump ho rhi hai 

import fs from "fs"
console.time()
const readStream = fs.createReadStream(
    "C:\\Users\\VILLAN\\OneDrive\\Desktop\\streamd.mp4.mkv",
    {
        highWaterMark: 1024 * 1024 * 2 // 2MB chunks
    }

)

readStream.on("data", (chunk) => {
    fs.appendFileSync("stream.mp4.mkv", chunk)
    if(chunk.byteLength < 1024 * 1024 * 2){

        console.timeEnd()
    }
})

//-------------------------------------



