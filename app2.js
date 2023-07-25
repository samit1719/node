const {format} = require('date-fns')
const {v4:uuid} = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async(message) =>{
    const dateRime = `${format(new Date(), 'yyyyMMdd\ :mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}`
    console.log(LogItem)
    try{
        await fsPromises.appendFile(path.join(__dirname,'logs','eventLog.txt'),logItem)
    }catch(err){
        console.log(err)
    }
}

module.exports = logEvents