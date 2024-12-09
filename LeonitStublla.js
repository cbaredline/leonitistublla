const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder (including views, script.js, style.css)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'about.html'));
});
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
