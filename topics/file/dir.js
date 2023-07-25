const fs = require('fs')

// create a folder
if(!fs.existsSync('./new2')){
    fs.mkdir('./new2',(err)=>{
        if(err) throw err
        console.log('Directory created')
    })
}


// remove a folder
if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if(err) throw err
        console.log('Directory created')
    })
}



