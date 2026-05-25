#!/usr/bin/env node
import fs from 'node:fs/promises'
const filePath = process.argv[2]
const searchWord = process.argv[3]  // search word from file
const checkExists = process.argv[4] === '--exists'  // flag check

const file = await fs.readFile(filePath, 'utf-8')
const content = file.toString()

const wordsArray = content.split(/[\W]/).filter((w) => w)

const wordCount = {}

wordsArray.forEach((word) => {
    if (word in wordCount) {
        wordCount[word] += 1
    } else {
        wordCount[word] = 1
    }
})

if (searchWord && checkExists) {
    // Sirf existence check karo
    const exists = searchWord in wordCount
    console.log(`"${searchWord}" ${exists ? '✅ EXISTS' : '❌ NOT FOUND'} in file`)

} else if (searchWord) {
    // Count dikhao
    const count = wordCount[searchWord] || 0
    console.log(`"${searchWord}" appears ${count} times`)

} else {
    // Sab words dikhao
    console.log(wordCount)
}

