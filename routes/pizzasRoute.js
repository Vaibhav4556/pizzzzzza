const express = require('express')

const router = express.Router()

const Pizza = require ("../models/pizaaModel")

router.get('/getallpizzas', async(req,res)=>{
   
   try {  

    const pizzas = await Pizza.find({})
    res.send(pizzas)
    
   } catch (error) {
     return(
    res.status(400).json({msg:error}))
   }

})

module.exports = router