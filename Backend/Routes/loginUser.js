const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// Create a new user
router.post("/loginUser", [
    body('email').isEmail(),
    body('password', 'incorrect Password').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
       let userData =  await User.findOne({email});
       if(!userData){
        return res.status(400).json({errors:"invalid credentials "})
       }

       if(password !== userData.password ){
        return res.status(400).json({errors:"invalid credentials"})
       }
       return res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
});

module.exports = router;
