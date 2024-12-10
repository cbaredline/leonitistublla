const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve your HTML file from the public folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set the server to listen on the specified port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

