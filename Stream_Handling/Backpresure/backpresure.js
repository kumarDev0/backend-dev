// import fs from "fs";

// const writableStream = fs.createWriteStream("file.txt") // agr file.txt exist karti hai aur usko kuch data hoga toh usko ye remove kar dega , agar file.txt exist nhi karta hai toh file.txt create kar dega 


// writableStream.write('mausham')// pehel ye write hoga 
// writableStream.write('love')// fir ye bhi write ho jaega yaha pe override nhi hoga
// writableStream.write('143')  // fir ye bhi write hoga ye teeno append hote ja rha hai 


// By default Readable Stream ki HighwaterMArk ki value 64 byte hoti hai 
// aur by default Writable Stream me highWaterMark  ki value hoti hai 16kb

// console.log(writableStream.writableHighWaterMark) // isse hum pata kar rhe hai byte ko 


// -----------------------------------------------------------------------------


// jab hum readable use kar rhe the tab kya ho rha tha 

import fs from "fs";

console.time()
const readStream = fs.createReadStream(
    "C:\\Users\\VILLAN\\OneDrive\\Desktop\\base64.mp4.mkv",
    {

        highWaterMark: 1 * 1024 * 1024
    }

)
const writeStream = fs.createWriteStream("streams.mp4")

readStream.on("data", (chunkBuffer) => {

    // Time 6.50 sec
    // Memory 50MB
    // CPU 15%
    // fs.appendFileSync('stream.mp4', chunkBuffer) // isse kya ho rha hai jitna baar hum run kar rahe hai mera file ka size increase ho rha hai ye galat logic hai isko har baar override karna hoga 


    // Time 1.5 sec
    // Memory 1GB
    // CPU 25%

    // writeStream.write(chunkBuffer)
    // yaha pe memory badh rha hai kyuki hum write stream ko galat tarika se use kar rhe hai 
    // ek concept hota hai writable stream ke sath (back presure)
    // write Stream back presure jab apply kare toh write karna band kar dena hota hai 
    // next backpresure here 


    // time After handling backpresure 2 sec
    // memory 40MB
    // CPU 20%
    const isEmpty = writeStream.write(chunkBuffer)
    if (!isEmpty) {
        readStream.pause()
    }
})

writeStream.on("drain", () => {
    readStream.resume()
})



readStream.on("end", () => {
    console.timeEnd()
})


