require('dotenv').config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const { json } = require('express');
const errorMiddleware = require('./middleware/error-middleware');
const connectDB = require('./database/db');
const path = require('path');
const router = require('./routes/router');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(json({ limit: '10mb' }));

// API routes
app.use('/', router);

// Serve static files from the 'frontend/build' directory
app.use(express.static(path.resolve('../build')));

// Serve the React app for any other route
app.get('*', (req, res) => {
    res.sendFile(path.resolve('../build', 'index.html'));
});

// Error handling middleware
app.use(errorMiddleware);

// Connect to the database and start the server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })