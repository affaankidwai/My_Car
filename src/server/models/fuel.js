const mongoose = require("mongoose");

const fuelSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  mileage: { type: Number, required: true },
});

const Fuel = mongoose.model("Fuel", fuelSchema);

module.exports = Fuel;
