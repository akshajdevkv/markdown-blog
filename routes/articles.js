const express= require('express')
const  router = express.Router()

router.get("/",(req,res)=>{
    res.send("hi this is article")
})

module.exports = router