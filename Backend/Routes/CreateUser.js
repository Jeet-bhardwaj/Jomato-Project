const express  = require('express');
const router = express.Router();
const User = require('../models/User');



router.post("/CreateUser", async (req,res) => {
    try{
        await User.create({
            name: "jeeeeeeet",
            password: "123214",
            email:"JEETR2030@gamil.com",
            location:"patna"

        })
        res.json({success:true});
    }
    catch(error){
        console.log(error);
        res.json({success:false});
    }
})
module.exports  = router;

 