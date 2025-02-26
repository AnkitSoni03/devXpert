// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="shadow sticky z-50 top-0">
//       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <img
//               src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//               className="mr-3 h-12"
//               alt="Logo"
//             />
//           </Link>
//           <div className="flex items-center lg:order-2">
//             <Link
//               to="#"
//               className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//             >
//               Log in
//             </Link>
//             <Link
//               to="#"
//               className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//             >
//               Get started
//             </Link>
//           </div>
//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <NavLink to="/"
//                   className={({isActive}) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about"
//                   className={({isActive}) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact"
//                   className={({isActive}) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/github"
//                   className={({isActive}) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Github
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }












import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-10 sm:h-12"
              alt="Logo"
            />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            type="button" 
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMobileMenu}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              )}
            </svg>
          </button>
          
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-colors duration-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-colors duration-300"
            >
              Get started
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div
            className={`${mobileMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 rounded transition-colors duration-200 ${isActive ? "text-white bg-orange-600 lg:bg-transparent lg:text-orange-600" : "text-gray-700"} border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-orange-600 lg:p-0`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 rounded transition-colors duration-200 ${isActive ? "text-white bg-orange-600 lg:bg-transparent lg:text-orange-600" : "text-gray-700"} border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-orange-600 lg:p-0`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 rounded transition-colors duration-200 ${isActive ? "text-white bg-orange-600 lg:bg-transparent lg:text-orange-600" : "text-gray-700"} border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-orange-600 lg:p-0`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/github"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 rounded transition-colors duration-200 ${isActive ? "text-white bg-orange-600 lg:bg-transparent lg:text-orange-600" : "text-gray-700"} border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-orange-600 lg:p-0`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}