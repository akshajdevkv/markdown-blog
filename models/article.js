const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')

// Configure marked to properly parse markdown headings
marked.setOptions({
    headerIds: true,
    headerPrefix: 'markdown-',
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    sanitize: false,
    silent: false,
    tables: true,
    breaks: true,
    gfm: true
});
 

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    }
})

articleSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, { 
            lower: true,
            strict: true
        })
    }

    if (this.markdown) {
        this.sanitizedHtml = marked.parse(this.markdown);
    }

    next()
})

module.exports = mongoose.model('Article', articleSchema) 