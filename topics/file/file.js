// const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

// read
// fs.readFile(path.join(__dirname,'files','sample.txt'), 'utf8',(err, data) => {
//     if(err) throw err
//     console.log(data);
// })

// write
// fs.writeFile(path.join(__dirname, 'files', 'new.txt'), 'new2 text', (err) => {
//     if(err) throw err
//     console.log("write complete");

    // append , modify or create if the file doesnt exist
    // fs.appendFile(path.join(__dirname,'files','new.txt'), '\n\ntest',(err) =>{
    //     if(err) throw err
    //     console.log("append complete")

        // rename
//         fs.rename(path.join(__dirname,'files','new.txt'),path.join(__dirname,'files','new2'),(err) =>{
//             if(err) throw err
//             console.log("rename complete")
//         })
//     })
// })

// exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1)
// })

// or

const fileOps = async () =>{
    try{
        // read
        const data = await fsPromises.readFile(path.join(__dirname,'files','sample.txt'),'utf-8')
        console.log(data)
        // delete
        await fsPromises.unlink(path.join(__dirname,'files','sample.txt'))
        // write
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data)
        // append
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\nnew line')
        // rename
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseRename.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseRename.txt'),'utf-8')
        console.log(newData)
       
    }catch (err){
        console.log(err)
    }
}

fileOps()




