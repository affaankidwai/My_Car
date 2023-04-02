// import { useState } from "react";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (
//     <div className="fixed w-full h-[80px] flex justify-between items-center z-10  text-gray-300">
//       <div>

//       </div>

//       <div>
//         <ul className="hidden md:flex">
//           <li className="text-gray-100 font-bold group px-6 py-4 my-2 flex items-center hover:bg-gray-800">
//             Home
//           </li>
//           <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
//             Fuel
//           </li>
//           <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
//             Service
//           </li>
//           <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
//             Other
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import Link from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fuel">Fuel</Link>
        </li>
      </ul>
    </nav>
  );
}
