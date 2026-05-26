import {
    rename,
    copyFile,
    cp,
    unlink,
    rmdir,
    rm,
    mkdir,
    writeFile,
    stat,
    watch,
    readFile

} from "node:fs/promises"

// rename('code.png' , 'code2.png')

// copyFile('code2.png' , 'mausham.png')
// copyFile('mausham.png' , "C:\\Users\\VILLAN\\OneDrive\\Desktop\\janeman.png")


// copy folder
// cp('./src' , "C:\\Users\\VILLAN\\OneDrive\\Desktop\\src" ,{recursive : true})


// move and rename karne ke liye rename() method ka hi use hoga

// rename('mausham.png' , "C:\\Users\\VILLAN\\OneDrive\\Desktop\\mausham2.png" )
// console.log("move and rename ek sath chalega")

// delete file

// unlink('mausham2.png')
// console.log("deleted permanently not recover")

// delete directory (rmdir , rm)
// rmdir empty directory ko delete karta hai
// rm non empty directory ko delete karta hai

// rmdir('debug')
// console.log("deleted permanently not recover")

// rm('src' , {recursive : true})
// console.log("deleted permanently not recover")


// mkdir  create empty directory and writeFile will create file

// mkdir('control')
// console.log(" Empty irectory created")

// writeFile('style.css' , '')
// console.log("Emty file created")

// mkdir('sum' ,  writeFile('index.html' , '') )
// console.log("Directory and file created ")

// ye hame size and birthdate and time batata hai file and directory ka
// const stats = await stat('style.css')
// console.log(stats)


// watch method ye ek file ko watch karta hai file me koi change hua hai ya nhi 



// difference 1

const watcher = watch('file.txt')

for await (const event of watcher) {
    if (event.eventType === "change") {
        console.log(await readFile('file.txt', "utf-8"))
    }
}


// difference 2

// import { watch } from "node:fs"
// import { readFile } from "node:fs/promises"

// watch('file.txt', async (eventType) => {
//     if(eventType === "change"){
//         console.log(await readFile('file.txt', "utf-8"))
//     }
// })