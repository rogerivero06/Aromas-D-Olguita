const express = require('express');
const app = express();
const port=3000;
app.use(express.static('public')); // Serve static files from 'public' directory
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://192.168.105.159:3000');
});

// Serve static files from the project directory
app.use(express.static(path.join(__dirname)));

// Middleware to allow access to certain files without authentication
app.use((req, res, next) => {
  if (
    req.path === '/login.html' ||
    req.path === '/manifest.json' ||
    req.path === '/sw.js' ||
    req.path.startsWith('/icons/')
  ) {
    return next();
  }
  return next();
});

// Serve login.html as the default page for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});