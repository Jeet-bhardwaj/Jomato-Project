const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        res.json([global.Food_details, global.Food_items]);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error occurred while fetching food data." });
    }
});

module.exports = router;
