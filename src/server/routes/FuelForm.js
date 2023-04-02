import { useState } from "react";
import axios from "axios";

const FuelForm = () => {
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [mileage, setMileage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fuelData = {
      date,
      price,
      quantity,
      mileage,
    };
    try {
      await axios.post("/api/fuel", fuelData);
      setDate("");
      setPrice("");
      setQuantity("");
      setMileage("");
      alert("Fuel entry added successfully!");
    } catch (error) {
      console.log(error);
      alert("Error adding fuel entry!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      </label>
      <br />
      <label>
        Mileage:
        <input type="number" value={mileage} onChange={(e) => setMileage(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Add Fuel Entry</button>
    </form>
  );
};

export default FuelForm;
