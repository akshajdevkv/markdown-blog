const express = require('express')
const Article = require('../models/article')
const router = express.Router()

router.get("/new", (req, res) => {
    res.render("articles/new", { article: new Article() })
})

router.get("/:id", async (req, res) => {
  res.send(req.params.id)
})

router.get("/", async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render("articles/index", { articles: articles })
})

router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch (e) {
        res.render('articles/new', { article: article })
    }
})

module.exports = router