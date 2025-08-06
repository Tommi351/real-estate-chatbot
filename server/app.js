const express = require('express');
const listingsRoutes = require("./routes/listings");
const gptRoutes = require("./routes/gpt");
const app = express();

app.get("/api/test", (req, res) => {
    res.send("Server is working")
});

app.use("api/listings", listingsRoutes);
app.use("api/gpt", gptRoutes);

app.listen(5000, () => {
    console.log("Serving on port 5000!")
});