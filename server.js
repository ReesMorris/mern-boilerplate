const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/api/users'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  // Serve index file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[Server] Listening on port ${PORT}`));
