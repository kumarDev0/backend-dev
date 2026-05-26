import { watch, appendFileSync, readFileSync, writeFileSync, existsSync } from "node:fs"
import * as readline from "node:readline"

// ✅ Colors
const colors = {
    green: (text) => `\x1b[32m${text}\x1b[0m`,
    red: (text) => `\x1b[31m${text}\x1b[0m`,
    reset: "\x1b[0m"
}

if (!existsSync("chat.txt")) {
    writeFileSync("chat.txt", "")
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// ✅ Messages with color 
const showMessages = (name) => {
    console.clear()
    console.log(`\n✅ Welcome ${name}! Type your name And Hit Enter (/exit = bye)\n`)
    console.log("──────────────────────────────────")

    const content = readFileSync("chat.txt", "utf-8")
    const lines = content.split("\n").filter(Boolean)

    lines.forEach(line => {
        if (line.includes(`] ${name}:`)) {
            console.log(colors.green(line))  // Terminal 1 message = green
        } else {
            console.log(colors.red(line))    // Terminal 2  message = red
        }
    })
}

rl.question("Tell me your name : ", (name) => {
    showMessages(name)

    watch("chat.txt", () => {
        showMessages(name)
    })

    const askMessage = () => {
        rl.question("", (msg) => {

            // ✅ Exit feature
            if (msg.trim().toLowerCase() === "/exit") {
                const time = new Date().toLocaleTimeString()
                appendFileSync("chat.txt", `[${time}] ${name}: Goodbye everyone! 👋\n`)
                console.log(colors.green("\n👋 Bye! Outside from terminal chat!\n"))
                rl.close()
                process.exit(0)
            }

            if (msg.trim()) {
                const time = new Date().toLocaleTimeString()
                appendFileSync("chat.txt", `[${time}] ${name}: ${msg}\n`)
            }
            askMessage()
        })
    }

    askMessage()
})