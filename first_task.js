const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello Backend!" });
});

app.get("/about", (req, res) => {
    res.json({
        name: "Adeena",
        course: "Backend AI Engineering"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});