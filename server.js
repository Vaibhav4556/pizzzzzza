const express = require('express')

const Pizza =require("./models/pizaaModel")

const db = require("./db")
const app = express()

app.use(express.json())

const path = require("path")

const pizzasRoute = require ('./routes/pizzasRoute')

const userRoute = require ('./routes/userRoute')


if (process.env.NODE_ENV === "production")
{
  app.use('/' , express.static('pizza_house/build'))

  app.get('*' , (req , res)=>{

    res.sendFile(path.resolve(__dirname , '/pizza_house/build/index.html'))
  })
}

app.use('/api/pizzas/', pizzasRoute)

app.use('/api/users/' , userRoute)

const port = process.env.PORT || 4000 

// app.get('/', function (req, res) {
//   res.send('Hello World1111')
// })


// app.get('/getpizzas',(req,res)=>{

//   Pizza.find({},(err,docs)=>{
//     if(err){
//       console.log(err)
//     }else
//     {
//       res.send(docs)
//     }
   
//   })
// })




app.listen(port,()=>console.log(`app is started in ${port}`))
