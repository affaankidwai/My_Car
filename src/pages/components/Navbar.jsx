import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center z-10  text-gray-300">
      <div>
        {/* <Link to="home" smooth={true} duration={500}> */}
        {/* <img src={Logo} alt="Logo Image" style={{ width: "120px" }} /> */}
        {/* </Link> */}
      </div>
      {/* //menu */}
      <div>
        <ul className="hidden md:flex">
          <li className="text-gray-100 font-bold group px-6 py-4 my-2 flex items-center hover:bg-gray-800">
            {/* <Link to="home" smooth={true} duration={500}> */}
            Home
            {/* </Link> */}
          </li>
          <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
            {/* <Link to="about" smooth={true} duration={500}> */}
            Fuel
            {/* </Link> */}
          </li>
          <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
            {/* <Link to="skills" smooth={true} duration={500}> */}
            Service
            {/* </Link> */}
          </li>
          <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
            {/* <Link to="work" smooth={true} duration={500}> */}
            Other
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
