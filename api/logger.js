const fs    = require('fs')
const logger = (req,res,next)=>{
    let logPath = __dirname + '/logs/log.txt'
    let dt = new Date().toString()
    let body = JSON.stringify(req.body)
    let query = JSON.stringify(req.query)
    let params = JSON.stringify(req.params)
    let str = `${dt}\t${req.method}\t${req.path}\n\tBody:\t${body}\n\tQuery:\t${query}\n\tParams:\t${params}\n---------------------------------------------------\n`;
    fs.appendFile(logPath,str,(err)=>err?console.log(err):'')
    next()
    //continue request
}

module.exports = logger