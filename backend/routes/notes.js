const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note'); // Assuming you have a Notes model defined

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('discription', 'Discription must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { title, discription, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, discription, tag,
            user: req.user.id
        })

        const savenote = await note.save()
        res.json(savenote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})
module.exports = router;