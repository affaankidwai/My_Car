import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp9194457.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start ml-12">
          <h1 className="text-6xl text-gray-400 font-bold mb-4">
            Toyota Fortuner
          </h1>
          <p className="text-gray-600 text-4xl m-2">UP 32 NL 2018</p>
          <p className="text-gray-700 m-2">24th February 2023</p>
          <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
