const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')
const path          = require('path')
require('dotenv').config()
const logger          = require('./logger')

const app = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('*',logger)

//Route

app.get('/',(req,res)=>{
    res.status(200).json({mssg:"Hello Node!"})
})

app.listen(process.env.PORT||4000,(err)=>{
    console.log('Server started on port %s',process.env.PORT||4000)
})