const express =require('express')
const app = express()
const articleRouter =  require("./routes/articles")
app.set('view engine','ejs')
app.use('/articles',articleRouter)
app.get("/",(req,res)=>{
    const articles = [
        {
            title: "Welcome to My Blog",
            date: new Date(),
            description: "This is my first article about web development"
        },
        {
            title: "Learning Express.js",
            date: new Date(),
            description: "A beginner's guide to building web applications with Express"
        },
        {
            title: "Working with EJS Templates",
            date: new Date(),
            description: "How to create dynamic web pages using EJS templating"
        }
    ]
    res.render("articles/index.ejs",{articles:articles})
})

app.listen(3000)