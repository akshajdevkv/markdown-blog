const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const app = express()
const articleRouter = require("./routes/articles")

mongoose.connect('mongodb://localhost/blog')

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.use('/articles',articleRouter)

app.get("/", async (req,res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render("articles/index", { articles: articles })
})

app.listen(3000)