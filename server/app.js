const express = require('express');
require('dotenv').config();
const cors = require('cors');
const listingsRoutes = require("./routes/listings");
const gptRoutes = require("./routes/gpt");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
  origin: 'http://localhost:5173', // 👈 allow your frontend to talk to backend
}));
app.use(express.json());
// Test route
app.get("/api/test", (req, res) => {
    res.send("Server is working")
});

// Routes
app.use("/api/listings", listingsRoutes);
app.use("/api/gpt", gptRoutes);

// Connecting Maps to frontend
app.get("/maps-key", (req, res) => {
  res.json({key: process.env.GOOGLEMAPS_API_KEY})
})

app.listen(port, () => {
    console.log("Serving on port 5000!")
});