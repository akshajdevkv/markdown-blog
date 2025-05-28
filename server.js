const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const app = express()
const articleRouter = require("./routes/articles")
const methodOverride = require('method-override')
const { JSDOM } = require('jsdom');

// Initialize DOMPurify with JSDOM
const window = new JSDOM('').window;
const DOMPurify = require('dompurify')(window);

// Add DOMPurify to global scope
global.DOMPurify = DOMPurify;

// Configure DOMPurify
DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    // Add target="_blank" to all <a> links
    if (node.tagName === 'A') {
        node.setAttribute('target', '_blank');
        node.setAttribute('rel', 'noopener noreferrer');
    }
});

// Set allowed tags and attributes
const allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'code', 'pre', 'blockquote', 'img'];
const allowedAttr = ['href', 'src', 'alt', 'title', 'target', 'rel'];

// Middleware to sanitize HTML
app.use((req, res, next) => {
    if (req.body && req.body.markdown) {
        req.body.markdown = DOMPurify.sanitize(req.body.markdown, {
            ALLOWED_TAGS: allowedTags,
            ALLOWED_ATTR: allowedAttr
        });
    }
    next();
});

// Export DOMPurify for use in other files
module.exports = { DOMPurify };
 

mongoose.connect('mongodb://localhost/blog')

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use('/articles',articleRouter)

app.get("/", async (req,res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render("articles/index", { articles: articles })
})

app.listen(3000)