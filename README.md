# Markdown Blog

A full-featured blog application that allows users to create, edit, and view articles written in Markdown. The application automatically converts Markdown content to HTML for display while preserving the original Markdown for editing.

![New Article Form](https://github.com/akshajdevkv/markdown-blog/raw/main/screenshots/new-article.png)

## Features

- **Create Articles**: Write blog posts using Markdown syntax
- **Edit Articles**: Update existing articles while maintaining Markdown formatting
- **Delete Articles**: Remove unwanted articles
- **Markdown Support**: Full support for Markdown syntax including:
  - Headings
  - Lists (ordered and unordered)
  - Text formatting (bold, italic)
  - Code blocks with syntax highlighting
  - Tables
  - Links and images
  - Blockquotes

![Blog Articles List](https://github.com/akshajdevkv/markdown-blog/raw/main/screenshots/blog-articles.png)

## Technology Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Templating**: EJS
- **Markdown Processing**: Marked.js
- **Styling**: Bootstrap 5

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/akshajdevkv/markdown-blog.git
   cd markdown-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB (make sure MongoDB is installed and running)

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:5000`

## Usage

1. **Creating a New Article**:
   - Click the "New Article" button
   - Fill in the title, description, and markdown content
   - Click "Save"

2. **Viewing Articles**:
   - All articles are displayed on the home page
   - Click "Read More" to view the full article

3. **Editing Articles**:
   - Navigate to the article you want to edit
   - Click the "Edit" button
   - Update the content and click "Save"

4. **Deleting Articles**:
   - Click the "Delete" button on an article card or on the article page

## Project Structure

- `models/` - Database models
- `routes/` - Express routes
- `views/` - EJS templates
- `server.js` - Main application file

## License

MIT