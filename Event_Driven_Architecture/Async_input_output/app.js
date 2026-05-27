import fspromises from "fs/promises";

import fs from "fs";

setTimeout(() => {
    console.log("Hello");
}, 0);

//this is an example of Async I/O
// ye async i/o is liye hai jis time tak hamara file read ho rha hai 
// hamara jo mian thread hai wo block nhi hota hai
// async await kaise kaam karta hai isko smjho ja ke javascript  me 

const fileContent = await fspromises.readFile("file.txt", "utf-8");
console.log(fileContent);

// another example of Async I/O
fs.redeadFile("file.txt", "utf-8", (err, data) => {
    console.log(data);
})


// this is an example of Sync I/O
// ye hamre main thred ko block kar dega 
const fileContent =  fs.readFileSync("file.txt", "utf-8");
console.log(fileContent);


// conclusion Async I/O ke case me Hello pehle print ho rha tha 
// Sync I/O ke case me Hello pehle print nhi ho rha baad me ho rha hai

// node js me har ek i/o ko karne ke liye Asyc I/O ka use karte hai

//kyu aisa hai jo I/O operation node js ne Asyncronous bana diya hai
// kyuki I/O operation jo hote hai wo time consuming hote hai
// file reading bhi time consuming hota hai 
// network request bhi time consuming hota hai 
// database se baat karna bhi time consuming hota hai 
// toh utna time tak hum main thread ko hi block kar denge
// toh hamari application lagg karne lagegi wo response nhi kar paegi dusre request ko 
// toh isiliye ye jo node js hai Async I/O perform karta hai
// isi chij ko solve akrne ke liye lagg na kare kuch languages har
// request ke liye new thread create kar leti hai lekin node js 
// new thred create bhi nhi krti aur lagg bhi nhi karta hai thread pool use karta hai node js
// I/O operation ko perform karne ke liye 




