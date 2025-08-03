const express = require('express');
const User = require('../models/User'); // Assuming you have a User model defined
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
})

module.exports = router;