const express = require('express');
const app = express();

app.get("/api/test", (req, res) => {
    res.send("Server is working")
});

app.listen(5000, () => {
    console.log("Serving on port 5000!")
});