const express = require("express");
const { Routes } = require("react-router-dom");
const router  = express.Router();


router.post('/foodData', (req,res)=>{
    try {
        console.log(global.Food_details);
        res.send([global.Food_details]);
    } catch(error){
        console.log(error);
        res.send("Server error");

    }

})

module.exports = router;
