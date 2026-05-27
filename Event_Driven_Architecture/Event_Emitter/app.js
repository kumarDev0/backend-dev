import EventEmitter from 'events'

const emiiter = new EventEmitter()

emiiter.on('abc', () => {
    console.log("abc event fired 1")
})

emiiter.on('abc', () => {
    console.log("abc event fired 2")
})
// console.log(emiiter)

emiiter.emit('abc')