const express = require("express");
const app = express();

app.get("/timestamp", (req, res) => {
    const currentTime = new Date();
    res.json({ timestamp: currentTime.toISOString() });
});

module.exports = app;
