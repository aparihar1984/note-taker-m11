// Defining our dependencies
const fs = require('fs');
const db = require('../../db/db.json')
const router = require('express').Router();
const uuid = require('../../helpers/uuid');

// GET request for the route end point '/api/notes'
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));

        res.send(data)
    })
})

// POST request for the route end point 'api/notes'
router.post('/api/notes', (req, res) => {

    let newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    }

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        let newData = JSON.parse(data);

        newData.push(newNote);
        console.log(newData)

        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
            if (err) throw err;

            res.send('successfully added');
        })
    });

// Defining the delete request for the route end point 'api/notes/:id'
router.delete('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
    let oldData = JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
        fs.writeFile('./db/db.json', JSON.stringify(newNotes));
        res.json("The note has been deleted");
        })
    });
})

module.exports = router;