import { readFile, writeFile, appendFile } from 'node:fs/promises'

// ye kud test.txt create karega aur iske andar hello world write kar dega 
// ab write ho chuka hai agar main second time hello world ke jagah mausham likh deta hu 
// toh ye existing hello world ko overwrite kar dega agar aisa
//  nhi chahiye hello world bhi likha rahe aur mausham bhi write ho toh hame append.File method ka use karna hoga 

const writeFile = writeFile('test.txt' , 'hello world')
const writeFile2 = writeFile('test.txt' , 'mausham')


// Read the file first from destop location and write the file in current directory

const contentbuffers = await readFile("C:\\Users\\VILLAN\\OneDrive\\Desktop\\test.txt")
console.log(contentbuffers)

writeFile('test.txt' , contentbuffers)

// Write a image file into destop location

const contentbuffers = await readFile("./image.jpg")
writeFile('C:\\Users\\VILLAN\\OneDrive\\Desktop\\img.jpg' , contentbuffers)

// task 1 : create own command (copy file-1.txt path) file copy ho jana chahiye 

// create a Watch 


setInterval( () => {

    writeFile('Timer.txt' , new Date().toLocaleTimeString())
}, 500)


// somthing is intresting best way to read and write 
// ye tarika sahi nhi hai copy karne ka kyuki big file ko hum copy nhi kar paenge isiliye ye sirf chhote file ke liye usse karna hai 
// is approach se bari file ko copy karne me kya problem aaegi
// is buffer ke varible me hum save kar rhe hai aur ye binary 0 , 1 me ja rha hai hamare RAM ke andar
// agar hum 4GB ki file is buffer varible me save kar diya toh socho hamara RAM 4GB ka hi hai toh kya hoga 
// in sabhi problem ko solve karne ke liye Stream ka use karte hai hame Stream and Buffer seekhna bahut jaruri hai 

try {
    const buffer = await readFile("./ima.jpg")
    writeFile('C:\\Users\\VILLAN\\OneDrive\\Desktop\\abc.jpg', buffer)

} catch (err) {
    appendFile(
        "error.log",
        `\n\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}`
    )
    // console.log(err)
    console.log(`You can check full message erro in the ./error.log file`)
}





