const express = require('express');
require('dotenv').config();
const cors = require('cors');
const listingsRoutes = require("./routes/listings");
const gptRoutes = require("./routes/gpt");
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // 👈 allow your frontend to talk to backend
}));
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.send("Server is working")
});

app.use("/api/listings", listingsRoutes);

app.use("/api/gpt", gptRoutes);

app.get("/maps-key", (req, res) => {
  res.json({key: process.env.GOOGLEMAPS_API_KEY})
})

app.listen(5000, () => {
    console.log("Serving on port 5000!")
});