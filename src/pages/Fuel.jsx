import Navbar from "./components/Navbar";
import FuelForm from "../server/routes/FuelForm";

const Fuel = () => {
  return (
    <div>
      <Navbar />
      <h1>Fuel Entry Form</h1>
      <FuelForm />
    </div>
  );
};

export default Fuel;
