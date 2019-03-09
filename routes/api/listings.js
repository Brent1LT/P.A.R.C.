const express = require("express");
const router = express.Router();

router.get("/listings", (req, res) => res.json({ msg: "This is the listings route" }));

module.exports = router;
