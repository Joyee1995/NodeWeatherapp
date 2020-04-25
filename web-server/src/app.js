const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

const publicdir = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../template/views')
const partialPath = path.join(__dirname,'../template/partials')
// console.log(path.join(__dirname,'../views'))

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(publicdir))

//Setup handlerbars enjine and views location
// refer app.set at http://expressjs.com/en/4x/api.html#app.set
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)




app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name: 'Joyee'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        helpText:'relax',
        name:"Meg"
        
    })
})

//Setup static directory to serve
app.use(express.static(publicdir))


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