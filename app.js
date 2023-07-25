const logEvents = require('./app2')
const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter()

MyEmitter.on('log',(msg)=> logEvents(msg))

setTimeout(()=>{
    MyEmitter.emit('log','Log event emitted')
},2000)

