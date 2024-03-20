const path = require('path');
const router = require('express').Router();

// Defining the route that sends 'notes.html' as a response to the user
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

// Defining the route that sends 'index.html' as a response to the user
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


module.exports = router;