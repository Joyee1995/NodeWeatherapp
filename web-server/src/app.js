const path = require('path')
const express = require('express')
const app = express()
const publicdir = path.join(__dirname,'../public')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(publicdir))

app.set('view engine','hbs')

// app.use(express.static(publicdir))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name: 'Joyee'
    })
})



app.get('/help',(req,res)=>{
    res.send([{
        name: 'Andrew',
        age:27
    },{
        name:'Joyee'

    }])
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'It is snowing',
        location:'Philadelphia'
    })
})



app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})