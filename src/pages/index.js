import React from "react";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://static.autox.com/uploads/2022/02/Toyota-Fortuner-Commander-front-three-quarter.jpg')",
      }}
    >
      <div className="flex flex-col md:flex-row h-screen justify-between items-center">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-6xl font-bold text-white mb-8">
            Toyota Fortuner App
          </h1>
          <h2 className="text-2xl font-semibold text-white">
            Keep track of your Toyota Fortuner's fuel refill, service, and
            expenses.
          </h2>
        </div>
        <nav className="flex justify-between items-center bg-white px-8 py-4">
          <div>
            <a href="#" className="text-xl font-bold text-gray-900">
              Fortuner App
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-lg bg-gray-900 text-white font-semibold"
            >
              Login
            </a>
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-gray-900 font-semibold ml-4"
            >
              Sign up
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
