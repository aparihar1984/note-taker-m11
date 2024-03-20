// Importing Express.js
const express = require('express');
// Importing built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');
// const fs = require('fs');

// Specifying on which port the Express.js server will run
const PORT = 3001;
// Initializing an instance of Express.js
const app = express();

// Importing the feedback routers
const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes/index');

// Middleware for parsing JSON and url encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

app.use(apiRoutes);
app.use(htmlRoutes);

// The listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});