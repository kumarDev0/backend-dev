// 1. masure time
// count byte 
import fs from "fs"


// calculate the byte from chars.txt file
console.time()
const readStream = fs.createReadStream(
    "chars.txt",
    {
        highWaterMark: 4
    }

)
let countRead = 0
readStream.on("data", (chunks) => {
    // console.log(chunks.byteLength)
    countRead++

})

readStream.on("end", () => {
    console.log({ countRead })
    console.timeEnd()
})

// Big file calculate how much time read 
console.time()
const readStream2 = fs.createReadStream(
    "C:\\Users\\VILLAN\\OneDrive\\Desktop\\streamd.mp4.mkv",
    {
        highWaterMark: 1024 * 1024 * 4
    }
)

let count = 0
readStream2.on("data", (chunks) => {
    count++
    // fs.appendFileSync("stream.mp4.mkv", chunks)
})

readStream2.on("end", () => {
    console.log({ count })
    console.timeEnd()
})






