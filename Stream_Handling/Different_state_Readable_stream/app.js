import fs from "fs"

const readStream = fs.createReadStream(
    "chars.txt",
    {
        highWaterMark: 4
    }
)
// console.log(readStream.readableFlowing)
// console.log(readStream.readableEnded)
// console.log(readStream.isPaused())

// readStream.on("data", (chunks) => {
//  console.log(chunks);
//  const agn = fs.appendFileSync('abc.txt' , `\n${chunks}`)
//  readStream.pause();

//  setTimeout(() => {
//     readStream.resume();

//  } , 1000)

// })

// another way 
readStream.on("data" , (chunks) => {
    const {readableHighWaterMark , bytesRead} = readStream
    if(readableHighWaterMark === bytesRead){
        fs.writeFileSync('xyz.txt' , chunks)
    }else{
        fs.appendFileSync('xyz.txt' , `\n${chunks}`)
    }

    readStream.pause()

    setTimeout(() => {
        readStream.resume()
    }, 200);
})

readStream.on("resume" , ()=>{
    console.log("Stream Resume")
})

readStream.on("pause" , () =>{
    console.log("Stream paused")
})

