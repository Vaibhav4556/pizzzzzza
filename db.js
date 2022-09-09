const mongoose=require("mongoose")

var mongoURL ="mongodb+srv://Vaibhav4556:vaibhav8336@cluster0.9ngzy3n.mongodb.net/Pizza_house"

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on("connected",()=>{
    console.log("MongoDB connection sucessfull")
})

db.on('error',()=>{
    console.log('MongoDB connection failed')
})

module.exports=mongoose