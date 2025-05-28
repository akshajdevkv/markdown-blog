const express= require('express')
const router = express.Router()

router.get("/new", (req, res) => {
    res.render("articles/new")
})

router.get("/", (req, res) => {
    res.render("articles/index")
})

router.post('/', (req, res) => {
    res.send('Submitted')
})

module.exports = router