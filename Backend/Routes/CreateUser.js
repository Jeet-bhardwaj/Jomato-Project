const express  = require('express');
const router = express.Router();
const User = require('../models/user');
const { Await } = require('react-router-dom');


router.post("/creatuser", async (req,res) => {
    try{
        await User.create({
            name: "jeeeeeeet",
            password: "123214",
            email:"JEETR2030@gamil.com",
            location:"patna",

        })
        re
    }
    catch(error){
        console.log(error);
        res.json({success:false});
    }
})


 