const fs = require('fs')
const path = require('path')

// read
fs.readFile(path.join(__dirname,'files','sample.txt'), 'utf8',(err, data) => {
    if(err) throw err
    console.log(data);
})

// write
fs.writeFile(path.join(__dirname, 'files', 'new.txt'), 'new text', (err) => {
    if(err) throw err
    console.log("write complete");
})

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})