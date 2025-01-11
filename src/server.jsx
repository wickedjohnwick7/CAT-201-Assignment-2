const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Use helmet for security enhancements
app.use(helmet());

// Enable CORS for cross-origin requests (optional)
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Simple API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to myPenang API!' });
});

// Catch-all handler for React app routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
