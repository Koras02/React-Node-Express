const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("접속 성공");
});

module.exports = router;
