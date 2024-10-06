const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// Create a new user
router.post("/createUser", [
    body('email').isEmail(),
    body('password', 'incorrect Password').isLength({ min: 5 }),
    body('name').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        });

        res.status(201).json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
});












module.exports = router;
