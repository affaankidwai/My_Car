// Importing required packages
const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const FuelEntry = require("./models/fuel")

// Initializing Next.js app
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Connecting to MongoDB
mongoose
  .connect(
    "mongodb+srv://affaankidwai:ZgMIbwvij0ZTXMhI@cluster0.knjfvuo.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => {
      console.log(err);
      process.exit(1); // Exit the process if there is an error connecting to MongoDB
  });
// Starting Express.js server
const port = process.env.PORT || 3000;
nextApp.prepare().then(() => {
  const server = express();

  // Parsing incoming requests
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // API route for adding fuel entry
  server.post("/api/fuel", async (req, res) => {
    try {
      const { date, price, quantity } = req.body;
      const mileage = (100 * quantity) / price;
      const fuelEntry = new FuelEntry({
        date,
        price,
        quantity,
        mileage,
      });
      await fuelEntry.save();
      res.json(fuelEntry);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });

  // Handler for all other requests
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Starting the server
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
