import fs, { createWriteStream } from "fs"

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 })

// console.log(writeStream.writableLength) // ye hame batata hai kitna data load hua hai
// let isEmpty = writeStream.write('a')
// console.log(isEmpty)

// console.log(writeStream.writableLength)
// isEmpty = writeStream.write('a')
// console.log(isEmpty)

// console.log(writeStream.writableLength)
// isEmpty = writeStream.write('a')
// console.log(isEmpty)

// console.log(writeStream.writableLength)
// isEmpty = writeStream.write('a')
// console.log(isEmpty)

// console.log(writeStream.writableLength)
// isEmpty = writeStream.write('a')
// console.log(isEmpty)

// console.log(writeStream.writableLength)

// using for loop 


// for (let i = 1; i <= 4; i++) {
//     console.log(writeStream.writableLength)
//     let isEmpty = writeStream.write("a")

//     if (!isEmpty) {
//         break;
//     }
//     console.log(isEmpty)

// }

// setTimeout(() => {
//     console.log(writeStream.writableLength)
// }, 10);


// using While loop
// let i = 1
// while (i <= 1000) {
//     console.log(writeStream.writableLength)
//     let isEmpty = writeStream.write("a")
//     i++

//     if (!isEmpty) {
//         break;
//     }
//     console.log(isEmpty)
// }

// writeStream.on('drain', () => {
//     console.log("Drain : ", writeStream.writableLength)

//     while (i <= 1000) {
//         console.log(writeStream.writableLength)
//         let isEmpty = writeStream.write("a")
//         i++

//         if (!isEmpty) {
//             break;
//         }
//         console.log(isEmpty)
//     }
// })


//----------------------------------

let i = 1
write1000A()
writeStream.on("drain" , () => {
    console.log("Drain : " , writeStream.writableLength)
    write1000A()
})

// same thing using function
function write1000A() {
    while (i <= 1000) {
        console.log(writeStream.writableLength)
        const isEmpty = writeStream.write("a")
        i++

        if (!isEmpty) {
            break;
        }
        console.log(isEmpty)
    }
}


